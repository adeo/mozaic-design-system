module.exports = {
  siteMetadata: {
    title: 'Mozaic',
  },
  __experimentalThemes: [
    { resolve: '@mozaic-ds/gatsby-theme-styleguide', options: {} },
  ],
  plugins: [
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: '5c0a2fe71e9fd4380c29b5ea0aee2382', // required
      },
    },
  ],
}
