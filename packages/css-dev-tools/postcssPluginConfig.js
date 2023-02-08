require('dotenv').config()
const scssSyntax = require('postcss-scss')
const autoprefixer = require('autoprefixer')
const postcssSass = require('@csstools/postcss-sass')
const stylelint = require('stylelint')
const reporter = require('postcss-reporter')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')
const mqpackerondemand = require('@mozaic-ds/postcss-media-queries-packer-on-demand')
const cssprepend = require('@mozaic-ds/postcss-prepend')
const CM = require('@mozaic-ds/configuration-manager')

const MOZAIC_ENV = process.env.MOZAIC_ENV
const mozaicEnvScssVar =
  MOZAIC_ENV === 'production' ? MOZAIC_ENV : 'development'

const styleLintConfig = require('./styleLintConfig')

const baseSassConfig = require('./sassConfig')

// load browserlist config
const browserslistConfig = CM.getKey('browserslist')
  ? CM.getKey('browserslist')
  : ['last 2 versions', 'firefox >= 52']

const sassConfig = CM.getKey('sass.config')
  ? CM.getKey('sass.config')
  : baseSassConfig

console.info(`Running ${mozaicEnvScssVar} plugins`)

const plugins = [
  stylelint({ config: styleLintConfig }),
  reporter({ clearReportedMessages: true }),
  cssprepend(`$mozaic-env: ${mozaicEnvScssVar};`),
  postcssSass(sassConfig),
  mqpackerondemand({
    sort: true,
  }),
  autoprefixer({
    overrideBrowserslist: browserslistConfig,
  }),
]

if (CM.getKey('stylelint.disabled')) {
  plugins.shift()
}

if (CM.getKey('autoprefixer.disabled')) {
  plugins.pop()
}

const productionPlugins = [
  cssprepend(`$mozaic-env: ${mozaicEnvScssVar};`),
  postcssSass(sassConfig),
  mqpackerondemand({
    sort: true,
  }),
  autoprefixer({
    overrideBrowserslist: browserslistConfig,
  }),
  cssnano(['default', { discardComments: { removeAll: true } }]),
]

if (CM.getKey('autoprefixer.disabled')) {
  productionPlugins.splice(4, 1)
}

if (CM.getKey('purgecss')) {
  productionPlugins.push(purgecss(CM.getKey('purgecss')))
}

module.exports = MOZAIC_ENV === 'production' ? productionPlugins : plugins
