const path = require('path')
const MozaicPaths = require('@mozaic-ds/css-dev-tools/sassConfig.js')

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: '@mozaic-ds/gatsby-github-release',
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: MozaicPaths.includePaths,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join('src'),
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
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        encode: 'balance',
        tokenize: 'strict',
        threshold: 0,
        resolution: 3,
        depth: 3,
        limit: 10,
        languages: ['en'],
        type: 'Mdx', // Filter the node types you want to index
        // Fields to index.
        fields: [
          {
            name: 'keywords',
            indexed: true,
            resolver: 'fields.keywords',
            attributes: {
              encode: 'advanced',
              tokenize: 'full',
              resolution: 9,
            },
            store: true,
          },
          {
            name: 'title',
            indexed: true, // If indexed === true, the field will be indexed.
            resolver: 'frontmatter.title',
            // Attributes for indexing logic. Check https://github.com/nextapps-de/flexsearch#presets for details.
            attributes: {
              encode: 'advanced',
              tokenize: 'full',
              resolution: 9,
              boost: 9,
            },
            store: true, // In case you want to make the field available in the search results.
          },
          {
            name: 'description',
            indexed: true,
            resolver: 'frontmatter.description',
            attributes: {
              encode: 'advanced',
              tokenize: 'full',
              resolution: 9,
            },
            store: true,
          },
          {
            name: 'url',
            indexed: true,
            resolver: 'fields.slug',
            store: true,
          },
        ],
      },
    },
  ],
}
