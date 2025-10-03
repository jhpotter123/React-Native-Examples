module.exports = {
  coverageProvider: 'v8',

  // Use a lightweight transform so we don't accidentally load react-native's
  // test setup (which in some environments enforces a newer @babel/core).
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],

  // By default jest ignores node_modules for transformation. React Native and
  // some testing libs ship untranspiled code; whitelist them here so babel-jest
  // will process them.
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-masked-text)/)'
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    '^react-native$': '<rootDir>/jest.react-native-mock.js'
  },

  testEnvironment: 'jsdom'
};


