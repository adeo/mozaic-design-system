module.exports = {
  '*.scss': ['stylelint --fix', 'stylelint', 'git add'],
  // '*.js': [
  //   'yarn format',
  //   'git add',
  //   (filenames) => `jest --coverage --findRelatedTests ${filenames.join(' ')}`,
  // ],
}
