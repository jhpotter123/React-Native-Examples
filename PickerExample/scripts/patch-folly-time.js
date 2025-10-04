#!/usr/bin/env node
// Idempotent JS patcher for Folly's Time.h to avoid clockid_t / CLOCK_* collisions
// Resolves symlinks, temporarily makes files writable, replaces the fallback block,
// and restores file permissions. Safe to run from Podfile post_install.
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const podSrc = path.join(repoRoot, 'ios', 'Pods', 'RCT-Folly', 'folly', 'portability', 'Time.h');
const podHdr = path.join(repoRoot, 'ios', 'Pods', 'Headers', 'Private', 'RCT-Folly', 'folly', 'portability', 'Time.h');

function resolveReal(file) {
  try {
    return fs.realpathSync(file);
  } catch (e) {
    return null;
  }
}

function readFileSafe(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch (e) { return null; }
}

function writeFileSafe(file, content) {
  fs.writeFileSync(file, content, { encoding: 'utf8' });
}

function patchContent(original) {
  const marker = 'FOLLY_TIME_H_PATCH_V1';
  if (original.includes(marker)) return { changed: false, content: original };

  // Look for the Folly fallback block start
  const startRegex = /^#if !FOLLY_HAVE_CLOCK_GETTIME[\s\S]*?\n/m;
  const matchStart = original.match(startRegex);
  if (!matchStart) {
    // nothing to replace, but maybe file is already the newer guarded form; we'll still insert marker if we detect typedef clockid_t
    if (original.includes('typedef uint8_t clockid_t')) {
      // replace the simple block with guarded variant by locating the '#if !FOLLY_HAVE_CLOCK_GETTIME' nearby is preferable, but
      // for safety, do a conservative replacement around the typedef occurrence: find surrounding #if ... #endif
    }
    return { changed: false, content: original };
  }

  // Find the end of the original block: the first '#endif' after the match start
  const afterStart = original.slice(original.indexOf(matchStart[0]) + matchStart[0].length);
  const endifIndex = afterStart.indexOf('\n#endif');
  if (endifIndex === -1) return { changed: false, content: original };
  const blockEndPos = original.indexOf(matchStart[0]) + matchStart[0].length + endifIndex + '\n#endif'.length;

  const replacement = `// FOLLY_TIME_H_PATCH_V1: added by scripts/patch-folly-time.js - safe guards for CLOCK and clockid_t\n// Avoid redefining CLOCK_* when the system headers already provide them (newer SDKs do). Use ifndef guards to be safe.\n#ifndef CLOCK_REALTIME\n#define CLOCK_REALTIME 0\n#endif\n#ifndef CLOCK_MONOTONIC\n#define CLOCK_MONOTONIC 1\n#endif\n#ifndef CLOCK_PROCESS_CPUTIME_ID\n#define CLOCK_PROCESS_CPUTIME_ID 2\n#endif\n#ifndef CLOCK_THREAD_CPUTIME_ID\n#define CLOCK_THREAD_CPUTIME_ID 3\n#endif\n\n#if !defined(CLOCK_REALTIME)\n// System does not provide CLOCK_* macros or clockid_t; provide a fallback typedef.\n#if !defined(_CLOCKID_T) && !defined(_CLOCKID_T_) && !defined(__clockid_t_defined) \\\n    && !defined(CLOCKID_T_DECLARED) && !defined(__CLOCKID_T)\ntypedef uint8_t clockid_t;\n#define CLOCKID_T_DECLARED 1\n#endif\n\nextern \"C\" int clock_gettime(clockid_t clk_id, struct timespec* ts);\nextern \"C\" int clock_getres(clockid_t clk_id, struct timespec* ts);\n#else\n// System headers already define CLOCK_* and clockid_t; declare the functions using the system type.\nextern \"C\" int clock_gettime(clockid_t clk_id, struct timespec* ts);\nextern \"C\" int clock_getres(clockid_t clk_id, struct timespec* ts);\n#endif\n`;

  const newContent = original.slice(0, original.indexOf(matchStart[0])) + replacement + original.slice(blockEndPos);
  return { changed: true, content: newContent };
}

function applyTo(filePath) {
  const real = resolveReal(filePath) || filePath;
  if (!fs.existsSync(real)) {
    console.log(`[patch-folly-time] file not found: ${filePath}`);
    return;
  }

  const origStat = fs.statSync(real);
  const origMode = origStat.mode;
  let madeWritable = false;
  try {
    // ensure writable
    try {
      fs.accessSync(real, fs.constants.W_OK);
    } catch (_) {
      // try to add user write
      fs.chmodSync(real, origMode | 0o200);
      madeWritable = true;
      console.log(`[patch-folly-time] made ${real} writable`);
    }

    const original = readFileSafe(real);
    if (original === null) {
      console.log(`[patch-folly-time] could not read ${real}`);
      return;
    }

    const { changed, content } = patchContent(original);
    if (!changed) {
      console.log(`[patch-folly-time] no changes needed for ${real}`);
      return;
    }

    // write to temp in same dir then rename
    const dir = path.dirname(real);
    const tmp = path.join(dir, 'Time.h.patched.' + Date.now());
    writeFileSafe(tmp, content);
    fs.renameSync(tmp, real);
    console.log(`[patch-folly-time] patched ${real}`);
  } finally {
    // restore mode (remove user write if we added it)
    if (madeWritable) {
      try { fs.chmodSync(real, origMode); } catch (e) { /* best effort */ }
    }
  }
}

// Run for both
applyTo(podSrc);
applyTo(podHdr);
console.log('[patch-folly-time] done');
