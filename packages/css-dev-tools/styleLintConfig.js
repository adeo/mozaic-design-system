'use strict'
const CM = require('@mozaic-ds/configuration-manager')

const configDefault = {
  caseStyle: 'kebab-case',
  bemEntitiesDelimiters: {
    modifier: '--',
    element: '__',
    media: '@',
  },
  prefixes: ['mc-', 'ml-', 'mu-', 'mt-', 'mdu-'],
}

const pickConfig = () => {
  const configUser = CM.getKey('stylelint')
  if (configUser) {
    configUser.caseStyle =
      configUser.caseStyle !== undefined
        ? configUser.caseStyle
        : configDefault.caseStyle
    configUser.bemEntitiesDelimiters =
      configUser.bemEntitiesDelimiters !== undefined
        ? configUser.bemEntitiesDelimiters
        : configDefault.bemEntitiesDelimiters
    configUser.prefixes =
      configUser.prefixes !== undefined
        ? configUser.prefixes.concat(configDefault.prefixes)
        : configDefault.prefixes
    return configUser
  }
  return configDefault
}

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['@mozaic-ds/stylelint-plugin-mozaic'],
  rules: {
    'at-rule-no-unknown': null,
    'max-empty-lines': null,
    'plugin/mozaic-bem-pattern': [pickConfig()],
    'no-invalid-position-at-import-rule': null,
    'max-line-length': null,
    'alpha-value-notation': null,
    'selector-class-pattern': null,
    'scss/no-global-function-names': null,
    // TODO: the following rules should be removed from the file when switching to @next
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/at-import-partial-extension': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/at-rule-conditional-no-parentheses': null,
    'custom-property-no-missing-var-function': null,
    'string-quotes': null,
    'at-rule-empty-line-before': null,
    'color-function-notation': null,
    'function-url-quotes': null,
    'value-keyword-case': null,
    'declaration-colon-newline-after': null,
    'rule-empty-line-before': null,
    'no-descending-specificity': null,
  },
}
