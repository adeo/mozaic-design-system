const base = require('./jest.config.base.js')

module.exports = {
  ...base,
  projects: ['<rootDir>', '<rootDir>/packages/*/jest.config.js'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coverageReporters: ['html', 'text'],
}
