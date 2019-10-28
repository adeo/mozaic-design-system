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
      options: {
        includePaths: [
          './node_modules/@mozaic-ds/styles/',
          './node_modules/@mozaic-ds/styles/settings-tools/',
          './node_modules/@mozaic-ds/styles/typography/',
          './node_modules/@mozaic-ds/styles/layout/',
          './node_modules/@mozaic-ds/styles/utilities/',
          './node_modules/@mozaic-ds/styles/components/',
          './node_modules/@mozaic-ds/tokens/build/scss',
          './tests/tokens/build/scss',
          './node_modules/',
        ],
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
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              enableCustomId: true,
              className: 'anchor-toc',
            },
          },
          'gatsby-remark-static-images',
        ],
      },
    },
  ],
}
