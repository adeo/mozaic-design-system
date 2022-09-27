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
    'plugin/mozaic-bem-pattern': [pickConfig()],
    // rules from Stylelint
    'alpha-value-notation': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-not-notation': 'simple',
    // rules from stylelint-scss
    'scss/no-global-function-names': null,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
  },
}
