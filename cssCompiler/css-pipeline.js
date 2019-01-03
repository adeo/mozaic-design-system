const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const scssSyntax = require('postcss-scss')
const nodeSass = require('postcss-node-sass')
const stylelint = require('stylelint')
const reporter = require('postcss-reporter')

const styleLintConfig = require('./styleLintConfig')

const plugins = [
  stylelint({ config: styleLintConfig }),
  reporter({ clearReportedMessages: true }),
  nodeSass({ includePaths: ['src/styles/'] }),
  autoprefixer({
    grid: 'autoplace',
    browsers: ['> 1%'],
  }),
]

const cssCompiler = (scss, pathFrom, pathTo) =>
  new Promise((resolve, reject) => {
    postcss(plugins)
      .process(scss, {
        from: pathFrom,
        to: pathTo,
        syntax: scssSyntax,
      })
      .then(res => resolve(res))
      .catch(err => {
        console.error(err.stack)
        reject(err.stack)
      })
  })

module.exports = cssCompiler
