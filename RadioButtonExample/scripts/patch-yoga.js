const fs = require('fs');
const path = require('path');

// Path to the Yoga.cpp inside react-native package
const yogaPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'react-native',
  'ReactCommon',
  'yoga',
  'yoga',
  'Yoga.cpp'
);

try {
  let src = fs.readFileSync(yogaPath, 'utf8');
  const before1 = "node->getLayout().hadOverflow() |\n        currentRelativeChild->getLayout().hadOverflow()";
  const after1 = "node->getLayout().hadOverflow() ||\n        currentRelativeChild->getLayout().hadOverflow()";

  const before2 = "node->getLayout().hadOverflow() |\n        (collectedFlexItemsValues.remainingFreeSpace < 0)";
  const after2 = "node->getLayout().hadOverflow() ||\n        (collectedFlexItemsValues.remainingFreeSpace < 0)";

  let changed = false;
  if (src.includes(before1)) {
    src = src.replace(before1, after1);
    changed = true;
  }
  if (src.includes(before2)) {
    src = src.replace(before2, after2);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(yogaPath, src, 'utf8');
    console.log('Patched Yoga.cpp');
    process.exit(0);
  } else {
    console.log('Yoga.cpp already patched or pattern not found');
    process.exit(0);
  }
} catch (e) {
  console.error('Failed to patch Yoga.cpp', e.message);
  process.exit(1);
}
