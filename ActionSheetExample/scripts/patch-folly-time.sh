#!/usr/bin/env bash
# idempotent patch script to make Folly's Time.h safe against SDK-provided clockid_t
# Applies to both the Pod source and the private headers copy. Handles symlinks and read-only files.
# Usage: ./scripts/patch-folly-time.sh
set -eu

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
POD_SRC="$REPO_ROOT/ios/Pods/RCT-Folly/folly/portability/Time.h"
POD_HDR="$REPO_ROOT/ios/Pods/Headers/Private/RCT-Folly/folly/portability/Time.h"

# Returns the canonical path for a file (follows symlinks) using Python3 which is portable on macOS
realpath_py() {
  python3 - "$1" <<PY
import os,sys
print(os.path.realpath(sys.argv[1]))
PY
}

apply_patch() {
  local file="$1"
  if [ ! -e "$file" ]; then
    echo "[patch-folly-time] file not found: $file"
    return 1
  fi

  # Resolve symlink to real target so we edit the underlying file
  local target
  target=$(python3 - "$file" <<PY
import os,sys
print(os.path.realpath(sys.argv[1]))
PY
  )

  if [ -z "$target" ]; then
    echo "[patch-folly-time] failed to resolve realpath for $file"
    return 1
  fi

  # Make writable if needed, remember to restore
  local made_writable=0
  if [ ! -w "$target" ]; then
    echo "[patch-folly-time] making $target writable"
    chmod u+w "$target" || {
      echo "[patch-folly-time] chmod u+w failed for $target"
      return 1
    }
    made_writable=1
  fi

  # If patch marker already exists, skip
  if grep -q "FOLLY_TIME_H_PATCH_V1" "$target"; then
    echo "[patch-folly-time] patch already applied to $target"
    # restore writability if we changed it
    if [ "$made_writable" -eq 1 ]; then
      chmod u-w "$target" || true
    fi
    return 0
  fi

  # Create a temp file in the same directory to avoid cross-filesystem mv issues
  local dir tmp
  dir=$(dirname "$target")
  tmp=$(mktemp "$dir/Time.h.patched.XXXXXX")

  awk 'BEGIN{patched=0}
  {
    lines[NR] = $0
  }
  END{
    for(i=1;i<=NR;i++){
      if(!patched && lines[i] ~ /Avoid redefining CLOCK\*_ macros when the system headers already/){
        # emit our safe block
        print "// FOLLY_TIME_H_PATCH_V1: added by scripts/patch-folly-time.sh - safe guards for CLOCK and clockid_t"
        print "// Avoid redefining CLOCK_* when the system headers already provide them (newer SDKs do). Use ifndef guards to be safe."
        print "#ifndef CLOCK_REALTIME"
        print "#define CLOCK_REALTIME 0"
        print "#endif"
        print "#ifndef CLOCK_MONOTONIC"
        print "#define CLOCK_MONOTONIC 1"
        print "#endif"
        print "#ifndef CLOCK_PROCESS_CPUTIME_ID"
        print "#define CLOCK_PROCESS_CPUTIME_ID 2"
        print "#endif"
        print "#ifndef CLOCK_THREAD_CPUTIME_ID"
        print "#define CLOCK_THREAD_CPUTIME_ID 3"
        print "#endif\n"
        print "#if !defined(CLOCK_REALTIME)"
        print "// System does not provide CLOCK_* macros or clockid_t; provide a fallback typedef."
        print "#if !defined(_CLOCKID_T) && !defined(_CLOCKID_T_) && !defined(__clockid_t_defined) \\"
        print "    && !defined(CLOCKID_T_DECLARED) && !defined(__CLOCKID_T)"
        print "typedef uint8_t clockid_t;"
        print "#define CLOCKID_T_DECLARED 1"
        print "#endif\n"
        print "extern \"C\" int clock_gettime(clockid_t clk_id, struct timespec* ts);"
        print "extern \"C\" int clock_getres(clockid_t clk_id, struct timespec* ts);"
        print "#else"
        print "// System headers already define CLOCK_* and clockid_t; declare the functions using the system type."
        print "extern \"C\" int clock_gettime(clockid_t clk_id, struct timespec* ts);"
        print "extern \"C\" int clock_getres(clockid_t clk_id, struct timespec* ts);"
        print "#endif"

        # Skip the original block lines until the closing #endif of the original guard
        j = i
        while(j<=NR){
          if(lines[j] ~ /^#endif/){
            i = j
            break
          }
          j++
        }
        patched=1
      } else {
        print lines[i]
      }
    }
  }' "$target" > "$tmp"

  # Replace the target only if different
  if ! cmp -s "$target" "$tmp"; then
    mv "$tmp" "$target"
    echo "[patch-folly-time] patched $target"
  else
    rm -f "$tmp"
    echo "[patch-folly-time] no changes needed for $target"
  fi

  # Restore read-only if we made it writable
  if [ "$made_writable" -eq 1 ]; then
    chmod u-w "$target" || true
  fi

  return 0
}

# Apply to both files (ignore missing private header gracefully)
apply_patch "$POD_SRC"
if [ -f "$POD_HDR" ]; then
  apply_patch "$POD_HDR"
else
  echo "[patch-folly-time] private header not found: $POD_HDR (skipping)"
fi

echo "[patch-folly-time] done"
