const config = {
  siteMetadata: {
    title: 'Mozaic Design System',
    siteUrl: 'https://mozaic.adeo.cloud',
    description: `Mozaic is Adeo's Design System, created to enhance the team's delivery time, improve quality of deliverables and thus help set up a coherent customer experience.`,
    githubUrl: 'https://github.com/adeo/mozaic-design-system',
  },
  plugins: [
    `@mozaic-ds/gatsby-theme-styleguide`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mozaic.adeo.cloud`,
        stripQueryString: true,
      },
    },
  ],
  flags: {
    FAST_DEV: true,
  },
}

export default config
