const resolvedNestedSelector = require('postcss-resolve-nested-selector')
const parser = require('postcss-selector-parser')

const selector = (rule, result) => {
  const selector = rule.selector
  const selectorDef = []

  resolvedNestedSelector(selector, rule).forEach((resolvedSelector) => {
    try {
      parser((parsedSelector) => {
        parsedSelector.each((selectorNode) => {
          selectorNode.walk((s) => {
            selectorDef.push({
              value: s.value,
              type: s.type,
            })
          })
        })
      }).process(resolvedSelector)
    } catch (e) {
      result.warn('Cannot parse selector', {})
    }
  })

  return selectorDef
}

module.exports = selector
