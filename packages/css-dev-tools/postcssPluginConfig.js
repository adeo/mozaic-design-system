const scssSyntax = require('postcss-scss')
const autoprefixer = require('autoprefixer')
const nodeSass = require('postcss-node-sass')
const stylelint = require('stylelint')
const reporter = require('postcss-reporter')
const mqpacker = require('css-mqpacker')

const styleLintConfig = require('./styleLintConfig')

const plugins = [
  stylelint({ config: styleLintConfig }),
  reporter({ clearReportedMessages: true }),
  nodeSass({
    includePaths: [
      './node_modules/@mozaic-ds/styles/',
      './node_modules/@mozaic-ds/styles/settings-tools/',
      './node_modules/@mozaic-ds/styles/typography/',
      './node_modules/@mozaic-ds/styles/layout/',
      './node_modules/@mozaic-ds/styles/utilities/',
      './node_modules/@mozaic-ds/styles/components/',
      './node_modules/@mozaic-ds/tokens/build/scss/',
      './node_modules/',
    ],
    outputStyle: 'expanded',
    indentWidth: 2,
  }),
  mqpacker({ sort: true }),
  autoprefixer({
    grid: 'autoplace',
    browsers: ['> 1%'],
  }),
]

module.exports = plugins
