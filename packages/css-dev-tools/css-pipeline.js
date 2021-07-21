const postcss = require('postcss')
const scssSyntax = require('postcss-scss')
const postCssPluginConfig = require('./postcssPluginConfig')

const postcssWithConfig = postcss(postCssPluginConfig)

const cssCompiler = (scss, pathFrom, pathTo) =>
  new Promise((resolve, reject) => {
    postcssWithConfig
      .process(scss, {
        from: pathFrom,
        to: pathTo,
        syntax: scssSyntax,
      })
      .then((res) => resolve(res))
      .catch((err) => {
        console.error(err.stack)
        reject(err.stack)
      })
  })

module.exports = cssCompiler
