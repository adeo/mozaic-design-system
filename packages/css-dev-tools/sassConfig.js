'use strict'
const CM = require('@mozaic-ds/configuration-manager')

// test for user configured additional paths
const additionalPaths = CM.getKey('sass.includePaths')

// test for user configured custom tokens paths
const tokensBuildPath = CM.getKey('tokens.localTokensExportPath')

const basePaths = [
  './node_modules/@mozaic-ds/styles/',
  './node_modules/@mozaic-ds/styles/components/',
  './node_modules/@mozaic-ds/styles/generic/',
  './node_modules/@mozaic-ds/styles/layouts/',
  './node_modules/@mozaic-ds/styles/settings-tools/',
  './node_modules/@mozaic-ds/styles/typography/',
  './node_modules/@mozaic-ds/styles/utilities/',
  './node_modules/',
]

const tokensPath = tokensBuildPath
  ? basePaths.concat([`${tokensBuildPath}scss/`])
  : basePaths.concat([
      './node_modules/@mozaic-ds/tokens/build/lm/css/',
      './node_modules/@mozaic-ds/tokens/build/lm/scss/',
    ])

const includePaths = additionalPaths
  ? tokensPath.concat(additionalPaths)
  : tokensPath

const userIndent = CM.getKey('sass.indentWidth')
const indentWidth = userIndent ? userIndent : 2

module.exports = {
  includePaths,
  outputStyle: 'expanded',
  indentWidth,
}
