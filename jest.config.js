const base = require('./jest.config.base.js')

module.exports = {
  ...base,
  projects: ['<rootDir>/packages/*/jest.config.js'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
}
