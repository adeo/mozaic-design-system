const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const scss = require('postcss-scss')
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

const cssCompiler = (css, pathFrom, pathTo) =>
  new Promise((resolve, reject) => {
    postcss(plugins)
      .process(css, {
        from: pathFrom,
        to: pathTo,
        syntax: scss,
      })
      .then(res => resolve(res))
      .catch(err => {
        console.error(err.stack)
        reject(err.stack)
      })
  })

module.exports = cssCompiler
