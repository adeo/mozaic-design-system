module.exports = {
  name: 'Theme',
  displayName: '@mozaic-ds/gatsby-theme-styleguide',
  testPathIgnorePatterns: [
    '<rootDir>/test/spec/screenshots.test.js',
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
  ],
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost:8000`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
