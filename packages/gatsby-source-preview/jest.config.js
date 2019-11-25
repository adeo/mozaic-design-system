//Jest configuration for api
const base = require('../../jest.config.base.js')

module.exports = {
  name: 'Source-Preview',
  displayName: 'source-preview-test',
  testPathIgnorePatterns: [
    '<rootDir>/test/spec/screenshots.test.js',
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
  ],
}
