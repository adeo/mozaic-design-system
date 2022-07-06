const _ = require('lodash')

const stylelint = require('stylelint')
const ruleName = 'plugin/mozaic-bem-pattern'

const getSelector = require('./lib/getSelectors')
const splitSelector = require('./lib/splitSelector')
const checkCase = require('./lib/checkCase')

const isStringOrRegExp = (x) => {
  return _.isString(x) || _.isRegExp(x)
}

module.exports = stylelint.createPlugin(ruleName, (options) => {
  return (postcssRoot, postcssResult) => {
    const validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {
        actual: options,
        possible: {
          caseStyle: [isStringOrRegExp],
          bemEntitiesDelimiters: [_.isObject],
          prefixes: [_.isString],
        },
      }
    )

    if (!validOptions) return

    const excludedNestedPropertyDeclarations = /[^(margin|padding):$]/i

    postcssRoot.walkRules(excludedNestedPropertyDeclarations, (rule) => {
      const selector = getSelector(rule, postcssResult)
      const splitedSelector = splitSelector(selector, options)
      checkCase(splitedSelector, rule, postcssResult, ruleName, options)
    })
  }
})

module.exports.ruleName = ruleName
