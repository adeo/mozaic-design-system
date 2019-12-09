'use strict'

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['@mozaic-ds/stylelint-plugin-mozaic', 'stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'plugin/mozaic-bem-pattern': [
      {
        caseStyle: 'kebab-case',
        bemEntitiesDelimiters: {
          modifier: '--',
          element: '__',
          media: '/@',
        },
        prefixes: ['mc-', 'ml-', 'mu-', 'mt-'],
      },
    ],
  },
}
