module.exports = {
  '*.scss': ['stylelint --fix', 'stylelint', 'git add'],
  // '*.js': [
  //   'npm run format',
  //   'git add',
  //   (filenames) => `jest --coverage --findRelatedTests ${filenames.join(' ')}`,
  // ],
}
