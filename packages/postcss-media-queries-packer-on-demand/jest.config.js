//Jest configuration for api
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  name: 'PostCSS',
  displayName: 'PostCSSTest',
  testPathIgnorePatterns: [
    '<rootDir>/test/spec/screenshots.test.js',
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
  ],
}
