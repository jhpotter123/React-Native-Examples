// reanimated-compat.js
// Small runtime shim to provide `interpolate` for legacy code that expects
// the Reanimated v1-style API. This tries to map to `interpolateNode` (v2)
// or leaves existing `interpolate` in place if available.
const Reanimated = require('react-native-reanimated');

try {
  // If interpolate already exists, nothing to do
  if (typeof Reanimated.interpolate === 'function') {
    // already available
  } else if (typeof Reanimated.interpolateNode === 'function') {
    // Map interpolate -> interpolateNode
    Reanimated.interpolate = Reanimated.interpolateNode;
  } else if (Reanimated.default && typeof Reanimated.default.interpolateNode === 'function') {
    Reanimated.default.interpolate = Reanimated.default.interpolateNode;
  }
} catch (e) {
  // If require fails or assignment fails, swallow error; runtime will surface a clearer error.
  // Do not crash here.
  // console.warn('reanimated-compat: failed to initialize compatibility shim', e);
}

module.exports = {};
