require("dotenv").config()
const scssSyntax = require("postcss-scss")
const autoprefixer = require("autoprefixer")
const sass = require("@mozaic-ds/postcss-sass")
const stylelint = require("stylelint")
const base64 = require("postcss-base64")
const reporter = require("postcss-reporter")
const cssnano = require("cssnano")
const mqpackerondemand = require("@mozaic-ds/postcss-media-queries-packer-on-demand")
const cssprepend = require("@mozaic-ds/postcss-prepend")
const CM = require("@mozaic-ds/configuration-manager")

const MOZAIC_ENV = process.env.MOZAIC_ENV
const mozaicEnvScssVar =
  MOZAIC_ENV === "production" ? MOZAIC_ENV : "development"

const styleLintConfig = require("./styleLintConfig")

const sassConfig = require("./sassConfig")

// load browserlist config
const borwserslistConfig = CM.getKey("browserslist")
  ? CM.getKey("browserslist")
  : ["> 0.3%", "last 3 version", "IE > 10"]

console.info(`Running ${mozaicEnvScssVar} plugins`)

const plugins = [
  stylelint({ config: styleLintConfig }),
  reporter({ clearReportedMessages: true }),
  cssprepend(`$mozaic-env: ${mozaicEnvScssVar};`),
  sass(sassConfig),
  base64({
    pattern: /<svg.*<\/svg>/i,
    prepend: "data:image/svg+xml;base64,",
  }),
  mqpackerondemand({
    sort: true,
  }),
  autoprefixer({
    overrideBrowserslist: borwserslistConfig,
  }),
]

const productionPlugins = [
  cssprepend(`$mozaic-env: ${mozaicEnvScssVar};`),
  sass(sassConfig),
  base64({
    pattern: /<svg.*<\/svg>/i,
    prepend: "data:image/svg+xml;base64,",
  }),
  mqpackerondemand({
    sort: true,
  }),
  autoprefixer({
    overrideBrowserslist: borwserslistConfig,
  }),
  cssnano(["default", { discardComments: { removeAll: true } }]),
]

module.exports = MOZAIC_ENV === "production" ? productionPlugins : plugins
