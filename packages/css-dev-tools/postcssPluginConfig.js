const scssSyntax = require('postcss-scss')
const autoprefixer = require('autoprefixer')
const nodeSass = require('postcss-node-sass')
const stylelint = require('stylelint')
const base64 = require('postcss-base64')
const reporter = require('postcss-reporter')
const cssnano = require('cssnano')
const CM = require('@mozaic-ds/configuration-manager')

const MOZAIC_ENV = process.env.MOZAIC_ENV

// test for user configured additional paths
const additionalPaths = CM.getKey('sass.includePaths')

// test for user configured custom tokens paths
const tokensBuildPath = CM.getKey('tokens.localTokensExportPath')

const basePaths = [
  './node_modules/@mozaic-ds/styles/',
  './node_modules/@mozaic-ds/styles/settings-tools/',
  './node_modules/@mozaic-ds/styles/typography/',
  './node_modules/@mozaic-ds/styles/layout/',
  './node_modules/@mozaic-ds/styles/utilities/',
  './node_modules/@mozaic-ds/styles/components/',
  './node_modules/',
]

const tokensPath = tokensBuildPath
  ? basePaths.concat([`${tokensBuildPath}scss/`])
  : basePaths.concat(['./node_modules/@mozaic-ds/tokens/build/scss/'])

const includePaths = additionalPaths
  ? tokensPath.concat(additionalPaths)
  : tokensPath

// test for user configured space indent
const userIndent = CM.getKey('sass.indentWidth')
const indentWidth = userIndent ? userIndent : 2

const styleLintConfig = require('./styleLintConfig')

const plugins = [
  stylelint({ config: styleLintConfig }),
  reporter({ clearReportedMessages: true }),
  nodeSass({
    includePaths,
    outputStyle: 'expanded',
    indentWidth,
  }),
  base64({
    pattern: /<svg.*<\/svg>/i,
    prepend: 'data:image/svg+xml;base64,',
  }),
  autoprefixer(),
]

const productionPlugins = [
  nodeSass({
    includePaths,
    outputStyle: 'expanded',
    indentWidth,
  }),
  base64({
    pattern: /<svg.*<\/svg>/i,
    prepend: 'data:image/svg+xml;base64,',
  }),
  cssnano(['default', { discardComments: { removeAll: true } }]),
]

module.exports = MOZAIC_ENV === 'production' ? productionPlugins : plugins
