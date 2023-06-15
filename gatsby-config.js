module.exports = {
  siteMetadata: {
    title: 'Mozaic Design System',
    siteUrl: 'https://mozaic.adeo.cloud/',
    description: `Mozaic is Adeo's Design System, created to enhance the team's delivery time, improve quality of deliverables and thus help set up a coherent customer experience.`,
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
