require('dotenv').config()
const scssSyntax = require('postcss-scss')
const autoprefixer = require('autoprefixer')
const sass = require('@csstools/postcss-sass')
const stylelint = require('stylelint')
const base64 = require('postcss-base64')
const reporter = require('postcss-reporter')
const cssnano = require('cssnano')
const mqpackerondemand = require('@mozaic-ds/postcss-media-queries-packer-on-demand')
const cssprepend = require('@mozaic-ds/postcss-prepend')
const CM = require('@mozaic-ds/configuration-manager')

const MOZAIC_ENV = process.env.MOZAIC_ENV
const mozaicEnvScssVar =
  MOZAIC_ENV === 'production' ? MOZAIC_ENV : 'development'

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

// load browserlist config 
const borwserslistConfig = CM.getKey('browserslist') ? CM.getKey('browserslist') : ['> 0.3%', 'last 3 version', 'IE > 10']

console.info(`Running ${mozaicEnvScssVar} plugins`)

const plugins = [
  stylelint({ config: styleLintConfig }),
  reporter({ clearReportedMessages: true }),
  cssprepend(`$mozaic-env: ${mozaicEnvScssVar};`),
  sass({
    includePaths,
    outputStyle: 'expanded',
    indentWidth,
  }),
  base64({
    pattern: /<svg.*<\/svg>/i,
    prepend: 'data:image/svg+xml;base64,',
  }),
  mqpackerondemand({
    sort: true,
  }),
  autoprefixer({
    overrideBrowserslist: borwserslistConfig
  }),
]

const productionPlugins = [
  cssprepend(`$mozaic-env: ${mozaicEnvScssVar};`),
  sass({
    includePaths,
    outputStyle: 'expanded',
    indentWidth,
  }),
  base64({
    pattern: /<svg.*<\/svg>/i,
    prepend: 'data:image/svg+xml;base64,',
  }),
  mqpackerondemand({
    sort: true,
  }),
  autoprefixer({
    overrideBrowserslist: borwserslistConfig
  }),
  cssnano(['default', { discardComments: { removeAll: true } }]),
]

module.exports = MOZAIC_ENV === 'production' ? productionPlugins : plugins
