var stylelint = require('stylelint')

const cases = {
  'kebab-case': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
  lowerCamelCase: /^[a-z][a-zA-Z0-9]+$/,
  snake_case: /^[a-z][a-zA-Z0-9]+$/,
  PascalCase: /^[A-Z][a-zA-Z0-9]+$/,
  UpperCamelCase: /^[A-Z][a-zA-Z0-9]+$/,
}
const messages = ''

const match = (string, configCase) => cases[configCase].test(string)

const checkCase = (splitedSelector, rule, result, ruleName, options) => {
  let isValid = true

  splitedSelector.forEach(selectorPart => {
    if (selectorPart.type === 'class') {
      selectorPart.bemStructure.forEach(classPart => {
        const isValidCase = classPart.string.includes('#')
          ? true
          : match(classPart.string, options.wordDelimiterStyle)

        if (!isValidCase) {
          isValid = false
        }
      })
    }
  })

  if (!isValid) {
    message = `Invalid class syntax: "${rule.selector}" should be "${options.wordDelimiterStyle}" (${ruleName})`

    stylelint.utils.report({
      message: message,
      node: rule,
      result: result,
      ruleName: ruleName,
    })
  }
}

module.exports = checkCase
module.exports.messages = messages
