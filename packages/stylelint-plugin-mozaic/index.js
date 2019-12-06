const _ = require('lodash')
const stylelint = require('stylelint')

const checkCase = require('./lib/checkCase')
const getSelector = require('./lib/getSelectors')
const splitSelector = require('./lib/splitSelector')

const ruleName = 'plugin/mozaic-bem-pattern'

const isStringOrRegExp = x => {
  return _.isString(x) || _.isRegExp(x)
}

module.exports = stylelint.createPlugin(
  ruleName,
  (options, secondaryOptionObject) => {
    const allOptions = { ...options, ...secondaryOptionObject }
    return (root, result) => {
      if (!allOptions) return
      const validOptions = stylelint.utils.validateOptions(result, ruleName, {
        wordDelimiterStyle: [isStringOrRegExp],
        modifierDelimiter: [_.isString],
      })
      if (!validOptions) return
      root.walkRules(rule => {
        const selector = getSelector(rule, result)
        const splitedSelector = splitSelector(selector, allOptions)
        checkCase(splitedSelector, rule, result, ruleName, allOptions)
      })
    }
  }
)

module.exports.ruleName = ruleName
