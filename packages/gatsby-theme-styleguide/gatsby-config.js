const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: '@gardencss/gatsby-source-pattern',
      options: {
        path: "src/patterns",
        stylesPath: "packages/styles",
      },
    },
    {
      resolve: '@gardencss/gatsby-source-directory-tree',
      options: {
        path: path.join('src', 'pages'),
      },
    },
    {
      resolve: '@gardencss/gatsby-github-release',
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['src/pages/**/*.scss'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join('src'),
        ignore: [`**/\.pattern.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 760,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
  ],
}
