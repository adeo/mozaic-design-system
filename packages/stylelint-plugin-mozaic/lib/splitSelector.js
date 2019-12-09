const _ = require('lodash')

// eg .cm-foo-bar__baz--foo div
// should return
/* [
    {
        type: class,
        subType: component,
        string: 'cm-foo-bar__baz--foo',
        bemStructure: [
            { namespace: 'cm-' },
            { block: 'foo-bar' },
            { element: 'baz' },
            { modifier: 'foo' }
        ]
    },{
        type: type,
        string: 'div'
    }
]*/

function getPatternPositionArray(string, pattern) {
  let pos = null
  const arr = []

  while (pos !== -1) {
    pos = string.indexOf(pattern, pos + 1)

    if (pos !== -1) {
      arr.push(pos)
    }
  }

  return arr
}

function mergeArr(...args) {
  const arr = [].concat(...args)
  return arr.sort((a, b) => a - b)
}

function splitBem(string, options) {
  const delimitersToSplit = []
  Object.keys(options.bemEntitiesDelimiters).forEach(key => {
    delimitersToSplit.push(
      getPatternPositionArray(string, options.bemEntitiesDelimiters[key])
    )
  })

  const splitter = mergeArr(...delimitersToSplit, [0, string.length])
  const arr = []

  splitter.forEach((stringIndex, i) => {
    const part = string.substring(stringIndex, splitter[i + 1])
    let partFound = false

    Object.keys(options.bemEntitiesDelimiters).forEach(key => {
      if (part.startsWith(options.bemEntitiesDelimiters[key])) {
        arr.push({
          partType: key,
          string: part.replace(options.bemEntitiesDelimiters[key], ''),
        })

        partFound = true
      }
    })

    if (part && !partFound) {
      arr.push({ partType: 'block', string: part })
    }
  })
  return arr
}

const removePrefixes = (selector, options) => {
  const result = options.prefixes
    ? options.prefixes.filter(prefix => selector.includes(prefix, 0))
    : []
  if (result.length === 1) return selector.replace(result[0], '')
  if (result.length === 0) return selector
}

const splitSelector = (selector, options) => {
  selector.forEach((part, i) => {
    if (part.type === 'class') {
      const value = removePrefixes(part.value, options)
      part.bemStructure = splitBem(value, options)
    }
    selector[i] = part
  })
  return selector
}

module.exports = splitSelector
