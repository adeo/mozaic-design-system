const config = {
  siteMetadata: {
    title: 'ADEO Design System',
    siteUrl: 'https://mozaic.adeo.cloud',
    description: `A global and collaborative design system that facilitates the designer and developer experience, enabling them to create universal interfaces perfectly aligned with the business strategy of Adeo.`,
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
