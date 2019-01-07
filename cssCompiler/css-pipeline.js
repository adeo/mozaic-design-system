const postcss = require('postcss')
const scssSyntax = require('postcss-scss')
const postCssPluginConfig = require('./postcssPluginConfig')

const cssCompiler = (scss, pathFrom, pathTo) =>
  new Promise((resolve, reject) => {
    postcss(postCssPluginConfig)
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
