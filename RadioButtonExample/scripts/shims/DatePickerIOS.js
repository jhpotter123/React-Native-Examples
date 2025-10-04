// Minimal shim for DatePickerIOS to satisfy imports in older React Native index.js
// This file provides a no-op module so Metro can resolve the import when the platform
// no longer bundles DatePickerIOS (the real implementation is in @react-native-community/datetimepicker).
module.exports = null;
