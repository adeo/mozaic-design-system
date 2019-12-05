var testRule = require('stylelint-test-rule-tape')
var mozaicBemPattern = require('../index.js')

testRule(mozaicBemPattern.rule, {
  ruleName: mozaicBemPattern.ruleName,
  config: {
    wordDelimiterStyle: 'kebab-case',
    delimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
  },

  skipBasicChecks: true,

  accept: [
    {
      code: `.ml-container {
            margin-left: auto;
          
            @include set-from-screen('m') {
              padding-right: $mu200;
            }
          
            &--fluid {
              @include modify-from-screens($major-screens) {
                max-width: none;
              }
            }
          }`,
    },
  ],

  reject: [
    {
      code: '.Fa__ke {}',
      message:
        'Invalid case: ".Fa__ke" should be "UpperCamelCase" (' +
        mozaicBemPattern.ruleName +
        ')',
      line: 1,
      column: 1,
    },
  ],
})

testRule(mozaicBemPattern.rule, {
  ruleName: mozaicBemPattern.ruleName,
  config: {
    wordDelimiterStyle: 'UpperCamelCase',
    delimiters: {
      modifier: '__',
      element: '--',
      media: '/@',
    },
  },

  skipBasicChecks: true,

  accept: [
    {
      code: '.Fa__Ke {}',
    },
  ],

  reject: [
    {
      code: '.Fa__ke {}',
    },
  ],
})
