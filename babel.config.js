module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', 'babel-preset-gatsby'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
  babelrcRoots: [
    // Keep the root as a root
    '.',
    // Also consider monorepo packages "root" and load their .babelrc files.
    './packages/*',
  ],
  overrides: [
    {
      test: '/packages/gatsby-theme-styleguide',
      extends: '/packages/gatsby-theme-styleguide/.babelrc',
    },
  ],
}
