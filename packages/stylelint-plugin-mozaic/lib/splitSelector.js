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

  Object.keys(options.delimiters).forEach(key => {
    delimitersToSplit.push(
      getPatternPositionArray(string, options.delimiters[key])
    )
  })

  const splitter = mergeArr(...delimitersToSplit, [0, string.length])
  const arr = []

  splitter.forEach((stringIndex, i) => {
    const part = string.substring(stringIndex, splitter[i + 1])
    let partFound = false

    Object.keys(options.delimiters).forEach(key => {
      if (part.startsWith(options.delimiters[key])) {
        arr.push({
          partType: key,
          string: part.replace(options.delimiters[key], ''),
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

const splitSelector = (selector, options) => {
  selector.forEach((part, i) => {
    if (part.type === 'class') {
      part.bemStructure = splitBem(part.value, options)
    }

    selector[i] = part
  })
  return selector
}

module.exports = splitSelector
