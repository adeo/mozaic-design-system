const _ = require('lodash')

// eg .mc-my-call--small@from-m
// should return
/* [
    { partType: 'prefix', string: 'mc-' }
    { partType: 'block', string: 'my-call' },
    { partType: 'modifier', string: 'small' },
    { partType: 'media', string: 'from-m' },
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

const extractPrefix = (selector, options) => {
  const result = options.prefixes
    ? options.prefixes.filter(prefix => selector.includes(prefix, 0))
    : []

  if (result.length === 1) return result[0]
  if (result.length !== 1) return null
}

const splitSelector = (selector, options) => {
  let prefix = null
  selector.forEach((part, i) => {
    if (part.type === 'class') {
      prefix = extractPrefix(part.value, options)
      part.bemStructure = splitBem(part.value.replace(prefix, ''), options)
    }
    if (prefix && part.bemStructure) {
      part.bemStructure.push({ partType: 'prefix', string: prefix })
    }
    selector[i] = part
  })
  return selector
}

module.exports = splitSelector
