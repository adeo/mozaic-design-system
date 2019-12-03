const postcss = require('postcss')

module.exports = postcss.plugin('postcss-prepend', opts => {
  if (!opts) {
    return null
  }

  return root => {
    root.prepend(opts)
  }
})
