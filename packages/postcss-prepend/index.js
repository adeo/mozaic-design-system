module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-prepend',
    Once(root) {
      root.prepend(opts)
    },
  }
}

module.exports.postcss = true
