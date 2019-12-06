'use strict'

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['@mozaic-ds/stylelint-plugin-mozaic', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'unit-whitelist': ['px', 'em', '%', 'rem', 'ms', 'deg', 'vw'],
    'plugin/mozaic-bem-pattern': [
      {
        wordDelimiterStyle: 'kebab-case',
        delimiters: {
          modifier: '--',
          element: '__',
          media: '/@',
        },
      },
    ],
  },
}
