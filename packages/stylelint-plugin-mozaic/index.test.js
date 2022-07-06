const { ruleName } = require('.')

// kebab-case test
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: 'kebab-case',
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
    prefixes: ['mc-', 'ml-', 'mu-', 'mt-'],
  },

  accept: [
    {
      code: `.mc-block-name__element-name {}`,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mc-block-name__element-name {}
      }
      `,
    },
  ],

  reject: [
    {
      code: `.ml-Container {}`,
      message:
        'Invalid class syntax: ".ml-Container" should be "kebab-case" (' +
        ruleName +
        ')',
      line: 1,
      column: 1,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mcBlock-name__element-name {}
      }
      `,
      message:
        'Invalid class syntax: ".mcBlock-name__element-name" should be "kebab-case" (' +
        ruleName +
        ')',
    },
  ],
})

//  test camelCase
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: 'camelCase',
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
    prefixes: ['mc-', 'ml-', 'mu-', 'mt-'],
  },

  accept: [
    {
      code: `.mc-blockName__elementName {}`,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mc-blockName__elementName {}
      }
      `,
    },
  ],

  reject: [
    {
      code: `.ml-Container {}`,
      message:
        'Invalid class syntax: ".ml-Container" should be "camelCase" (' +
        ruleName +
        ')',
      line: 1,
      column: 1,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mc-block-name__element-name {}
      }
      `,
      message:
        'Invalid class syntax: ".mc-block-name__element-name" should be "camelCase" (' +
        ruleName +
        ')',
    },
  ],
})

//  test snake_case
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: 'snake_case',
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
    prefixes: ['mc-', 'ml-', 'mu-', 'mt-'],
  },

  accept: [
    {
      code: `.mc-block_same__element_name {}`,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mc-block_same__element_name {}
      }
      `,
    },
  ],

  reject: [
    {
      code: `.ml-Container {}`,
      message:
        'Invalid class syntax: ".ml-Container" should be "snake_case" (' +
        ruleName +
        ')',
      line: 1,
      column: 1,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mc-block-name__element-name {}
      }
      `,
      message:
        'Invalid class syntax: ".mc-block-name__element-name" should be "snake_case" (' +
        ruleName +
        ')',
    },
  ],
})

//  test PascalCase
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: 'PascalCase',
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
    prefixes: ['mc-', 'ml-', 'mu-', 'mt-'],
  },

  accept: [
    {
      code: `.mc-BlockSame__ElementName {}`,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mc-BlockSame__ElementName {}
      }
      `,
    },
  ],

  reject: [
    {
      code: `.ml-container {}`,
      message:
        'Invalid class syntax: ".ml-container" should be "PascalCase" (' +
        ruleName +
        ')',
      line: 1,
      column: 1,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .mc-block-name__element-name {}
      }
      `,
      message:
        'Invalid class syntax: ".mc-block-name__element-name" should be "PascalCase" (' +
        ruleName +
        ')',
    },
  ],
})

//  test prefixes
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: 'PascalCase',
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
    prefixes: ['mc-', 'ML-'],
  },

  accept: [
    {
      code: `.mc-BlockSame__ElementName {}`,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .ML-BlockSame__ElementName {}
      }
      `,
    },
  ],

  reject: [
    {
      code: `.mm-Container {}`,
      message:
        'Invalid class syntax: ".mm-Container" should be "PascalCase" (' +
        ruleName +
        ')',
      line: 1,
      column: 1,
    },
    {
      code: `@media screen and (min-width: 680px) {
        .Ml-block-name__element-name {}
      }
      `,
      message:
        'Invalid class syntax: ".Ml-block-name__element-name" should be "PascalCase" (' +
        ruleName +
        ')',
    },
  ],
})

//  test case using regex
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: /^[A-Z]+(_[A-Z]+)*$/,
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
    prefixes: ['mc-', 'ML-'],
  },

  accept: [
    {
      code: `.mc-BLOCK_SAME__ELEMENT_NAME {}`,
    },
  ],

  reject: [
    {
      code: `.mc-container {}`,
      message:
        'Invalid class syntax: ".mc-container" should be "/^[A-Z]+(_[A-Z]+)*$/" (' +
        ruleName +
        ')',
      line: 1,
      column: 1,
    },
  ],
})

// test stylelint-disable
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: 'camelCase',
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '/@',
    },
    prefixes: ['mc-', 'ml-', 'mu-', 'mt-'],
  },

  accept: [
    {
      code: `.mc-blockName__elementName {}
      /* stylelint-disable plugin/mozaic-bem-pattern  */
      .mc-block-Name__element-Name {}
      /* stylelint-enable */
             `,
    },
  ],

  reject: [
    {
      code: `.mc-blockName__elementName {}
             .mc-block-Name__element-Name {}
             `,
      message:
        'Invalid class syntax: ".mc-block-Name__element-Name" should be "camelCase" (' +
        ruleName +
        ')',
      line: 2,
    },
  ],
})

// test mc-my-call--small\@from-m
testRule({
  plugins: ['.'],
  ruleName,
  config: {
    caseStyle: 'kebab-case',
    bemEntitiesDelimiters: {
      modifier: '--',
      element: '__',
      media: '@',
    },
    prefixes: ['mc-', 'ml-', 'mu-', 'mt-'],
  },

  accept: [
    {
      code: `.mc-my-call--small\@from-m {} `,
    },
  ],

  reject: [],
})
