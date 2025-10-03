// Jest setup: define globals expected by react-native
global.__DEV__ = true;

// Provide a minimal bridge config so NativeModules doesn't attempt to access
// native code in the test environment.
global.__fbBatchedBridgeConfig = { remoteModuleConfig: [] };
