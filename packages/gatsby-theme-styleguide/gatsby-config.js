const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: '@mozaic-ds/gatsby-source-preview',
      options: {
        previewsFiles: 'src/docs/**/*.preview.*',
        rootPath: 'src/docs',
        stylesPath: 'packages/styles/**/*.scss',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: '@mozaic-ds/gatsby-source-directory-tree',
      options: {
        path: path.join('src', 'docs'),
      },
    },
    {
      resolve: '@mozaic-ds/gatsby-github-release',
    },
    {
      resolve: `gatsby-plugin-sass`,
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
        ignore: [`**/Previews/*.*`, `*.previews.*`], // ignore files starting with a dot
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join('src', 'data'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`],
        gatsbyRemarkPlugins: [
          'gatsby-remark-static-images',
          'gatsby-remark-prismjs',
        ],
      },
    },
  ],
}
