const base = require('./jest.config.base.js')

module.exports = {
  ...base,
  projects: ['<rootDir>/packages/*/jest.config.js'],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  collectCoverageFrom: ['**/*.js'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
}
