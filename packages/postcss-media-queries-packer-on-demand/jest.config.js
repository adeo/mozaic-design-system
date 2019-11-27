//Jest configuration for api
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  name: 'PostCSS',
  displayName: '@mozaic-ds/postcss-media-queries-packer-on-demand',
  testPathIgnorePatterns: [
    '<rootDir>/test/spec/screenshots.test.js',
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
  ],
}
