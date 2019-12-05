// Abbreviated example
const _ = require('lodash')
const stylelint = require('stylelint')

const checkCase = require('./lib/checkCase')
const getSelector = require('./lib/getSelectors')
const splitSelector = require('./lib/splitSelector')

const ruleName = 'plugin/mozaic-bem-pattern'

const isStringOrRegExp = x => {
  return _.isString(x) || _.isRegExp(x)
}

module.exports = stylelint.createPlugin(ruleName, options => {
  return (root, result) => {
    if (!options) return
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      wordDelimiterStyle: [isStringOrRegExp],
      modifierDelimiter: [_.isString],
    })

    if (!validOptions) return

    root.walkRules(rule => {
      const selector = getSelector(rule, result)
      const splitedSelector = splitSelector(selector, options)
      checkCase(splitedSelector, rule, result, ruleName, options)
    })
  }
})

module.exports.ruleName = ruleName
