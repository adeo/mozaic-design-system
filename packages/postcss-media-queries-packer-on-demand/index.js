const postcss = require('postcss')
const list = require('postcss/lib/list')
let startPacking = false
let queries = {}
let queryLists = []

/* eslint-disable */

const parseQueryList = (queryList) => {
  const queries = []

  list.comma(queryList).forEach((query) => {
    const expressions = {}

    list.space(query).forEach((expression) => {
      let newExpression = expression.toLowerCase()

      if (newExpression === 'and') {
        return
      }

      if (/^\w+$/.test(newExpression)) {
        expressions[newExpression] = true

        return
      }

      newExpression = list.split(newExpression.replace(/^\(|\)$/g, ''), [':'])
      const [feature, value] = newExpression

      if (!expressions[feature]) {
        expressions[feature] = []
      }

      expressions[feature].push(value)
    })
    queries.push(expressions)
  })

  return queries
}

const inspectLength = (length) => {
  if (length === '0') {
    return 0
  }

  const matches = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(length)

  if (!matches) {
    return Number.MAX_VALUE
  }

  matches.shift()
  const [num, unit] = matches
  let newNum = num

  switch (unit) {
    case 'ch':
      newNum = parseFloat(newNum) * 8.8984375

      break

    case 'em':
    case 'rem':
      newNum = parseFloat(newNum) * 16

      break

    case 'ex':
      newNum = parseFloat(newNum) * 8.296875

      break

    case 'px':
      newNum = parseFloat(newNum)

      break
  }

  return newNum
}

const pickMinimumMinWidth = (expressions) => {
  const minWidths = []

  expressions.forEach((feature) => {
    let minWidth = feature['min-width']

    if (!minWidth || feature.not || feature.print) {
      minWidth = [null]
    }

    minWidths.push(minWidth.map(inspectLength).sort((a, b) => b - a)[0])
  })

  return minWidths.sort((a, b) => a - b)[0]
}

const sortQueryLists = (queryLists, sort) => {
  const mapQueryLists = []

  if (!sort) {
    return queryLists
  }

  if (typeof sort === 'function') {
    return queryLists.sort(sort)
  }

  queryLists.forEach((queryList) => {
    mapQueryLists.push(parseQueryList(queryList))
  })

  return mapQueryLists
    .map((e, i) => ({
      index: i,
      value: pickMinimumMinWidth(e),
    }))
    .sort((a, b) => a.value - b.value)
    .map((e) => queryLists[e.index])
}

function addToAtRules(node) {
  if (node.parent.parent && node.parent.parent.type !== 'root') {
    return
  }

  if (node.parent.type !== 'root') {
    const newAtRule = postcss.atRule({
      name: node.parent.name,
      params: node.parent.params,
    })

    node.each((rule) => {
      newAtRule.append(rule)
    })
    node.remove()
    node.removeAll()
    node.append(newAtRule)
  }

  const queryList = node.params
  const past = queries[queryList]

  if (typeof past === 'object') {
    node.each((rule) => {
      past.append(rule.clone())
    })
  } else {
    queries[queryList] = node.clone()
    queryLists.push(queryList)
  }

  node.remove()
}

module.exports = (options = {}) => {
  const opts = {
    sort: false,
    ...options,
  }

  return {
    postcssPlugin: 'postcss-media-queries-packer-on-demand',
    Once(root) {
      root.each((node) => {
        if (node.type === 'comment' && node.text === 'mqp:start') {
          startPacking = true
          node.remove()
        }

        if (node.type === 'comment' && node.text === 'mqp:end') {
          startPacking = false
        }

        if (
          node.type === 'atrule' &&
          node.name === 'media' &&
          startPacking === true
        ) {
          addToAtRules(node)
        }

        if (
          node.type === 'comment' &&
          node.text === 'mqp:end' &&
          startPacking === false
        ) {
          sortQueryLists(queryLists, opts.sort).forEach((queryList) => {
            node.before(queries[queryList])
          })

          node.remove()
          queries = {}
          queryLists = []
        }
      })
    },
  }
}

module.exports.postcss = true
