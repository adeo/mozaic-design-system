module.exports = {
  '*.scss': ['stylelint --fix', 'stylelint', 'git add'],
  '*.js': [
    'yarn format',
    'git add',
    filenames =>
      `jest --projects ./packages/gatsby-theme-styleguide/jest.config.js --coverage --findRelatedTests ${filenames.join(
        ' '
      )}`,
  ],
}
