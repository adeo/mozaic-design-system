const babelOptions = {
  plugins: ['@babel/plugin-transform-runtime'],
  // presets: [
  //   [
  //     'babel-preset-gatsby',
  //     {
  //       corejs: 3,
  //     },
  //   ],
  // ],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
