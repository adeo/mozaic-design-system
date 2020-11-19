module.exports = {
  siteMetadata: {
    title: 'Mozaic',
  },
  plugins: [
    '@mozaic-ds/gatsby-theme-styleguide',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-123240222-19',
      },
    },
  ],
}
