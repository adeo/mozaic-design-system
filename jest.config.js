const base = require('./jest.config.base.js')

module.exports = {
  ...base,
  projects: [
    '<rootDir>/iconCompiler/jest.config.js',
    '<rootDir>/ci/jest.config.js',
    '<rootDir>/packages/*/jest.config.js',
  ],
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coverageReporters: ['html', 'text'],
}
