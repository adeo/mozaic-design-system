module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'babel-preset-gatsby'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-private-methods', { loose: false }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    '@babel/plugin-syntax-dynamic-import',
  ],
}
