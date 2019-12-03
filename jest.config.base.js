module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/test/spec/screenshots.test.js',
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
  ],
  coveragePathIgnorePatterns: [
    '(tests/.*.mock).(jsx?|js?)$',
    '<rootDir>/packages/(?:.+?)/lib/',
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
    'jest.config.js',
    './*.config.js',
    'setup-test-env.js',
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
}
