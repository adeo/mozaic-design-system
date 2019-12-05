'use strict'

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss', '@mozaic-ds/stylelint-plugin-mozaic'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'plugin/mozaic-bem-pattern': {
      wordDelimiterStyle: 'kebab-case',
      delimiters: {
        modifier: '--',
        element: '__',
        media: '/@',
      },
    },
  },
}
