//Jest configuration for api
const base = require('../../jest.config.base.js')

module.exports = {
  name: 'Source-Preview',
  displayName: '@mozaic-ds/gatsby-source-preview',
  testPathIgnorePatterns: [
    '<rootDir>/test/spec/screenshots.test.js',
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
  ],
}
