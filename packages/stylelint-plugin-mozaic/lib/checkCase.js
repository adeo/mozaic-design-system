var stylelint = require('stylelint')

const cases = {
  'kebab-case': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
  camelCase: /^[a-z][a-zA-Z0-9]+$/,
  snake_case: /^[a-z]+(_[a-z]+)*$/,
  PascalCase: /^[A-Z][a-zA-Z0-9]+$/,
}
const messages = ''

const match = (string, configCase) =>
  cases[configCase] !== undefined
    ? cases[configCase].test(string)
    : configCase.test(string)

const checkCase = (splitedSelector, rule, result, ruleName, options) => {
  let isValid = true

  splitedSelector.forEach(selectorPart => {
    if (selectorPart.type === 'class') {
      selectorPart.bemStructure.forEach(classPart => {
        // ignore # for variables in scss files
        const isValidCase =
          classPart.string.includes('#') || classPart.partType === 'prefix'
            ? true
            : match(classPart.string, options.caseStyle)
        if (!isValidCase) {
          isValid = false
        }
      })
    }
  })

  if (!isValid) {
    message = `Invalid class syntax: "${rule.selector}" should be "${options.caseStyle}" (${ruleName})`

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
