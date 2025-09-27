#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const targetDir = path.join(projectRoot, 'node_modules', '@react-native-community', 'cli-plugin-metro', 'node_modules');
const source = path.join(projectRoot, 'node_modules', 'metro-react-native-babel-transformer');
const linkPath = path.join(targetDir, 'metro-react-native-babel-transformer');

try {
  if (!fs.existsSync(source)) {
    console.warn('source metro-react-native-babel-transformer not found at', source);
    process.exit(0);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  try {
    if (fs.existsSync(linkPath)) {
      fs.unlinkSync(linkPath);
    }
  } catch (e) {
    // ignore
  }

  // create relative symlink
  const rel = path.relative(targetDir, source);
  fs.symlinkSync(rel, linkPath, 'dir');
  console.log('created symlink:', linkPath, '->', rel);
} catch (err) {
  console.error('failed to create metro transformer symlink', err);
  process.exit(1);
}
