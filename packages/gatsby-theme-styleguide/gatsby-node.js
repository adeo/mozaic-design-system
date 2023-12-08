const express = require('express')
const path = require('path')
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)
const postTemplate = path.resolve(`${__dirname}/src/templates/pattern-page.js`)
const colorsTokensLM =
  require('@mozaic-ds/tokens/build/js/tokensObject.js').color
const colorsTokensAdeo =
  require('@mozaic-ds/tokens/buildAdeo/js/tokensObject.js').color

/**
 * gatsby api hook that will run when the development server is started
 * adding this line will allow to extend the server development configuration.
 * For this special case it will allow the content inside the public folder that gatsby will generate to be served and accessible.
 * more on that here =>https://www.gatsbyjs.org/docs/node-apis/#onCreateDevServer
 *
 */
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'))
}

exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `docs` })
    const fileName = path.basename(node.internal.contentFilePath)

    const keywords = `${slug.split('/').join(', ')}, ${
      node.frontmatter.searchKeywords
    }`

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `keywords`,
      value: keywords,
    })

    createNodeField({
      node,
      name: `fileName`,
      value: fileName,
    })
  }
}

// Utils
const debounce = (fnc, tm) => {
  let time
  return function () {
    clearTimeout(time)
    time = setTimeout(() => {
      fnc.apply(this, arguments)
    }, tm)
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // MDX
  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `${node.fields.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

/**
 * Add Mozaic Colors to GraphQL
 */

exports.sourceNodes = async (gatsbyApi) => {
  function createTokensColorNode(colorsTokens, nodeName) {
    Object.keys(colorsTokens).map((tokens) => {
      if (
        [100] in colorsTokens[tokens] ||
        'primary-01' in colorsTokens[tokens]
      ) {
        const nodeData = Object.assign(
          {},
          {
            colors: JSON.stringify(colorsTokens[tokens]),
            id: gatsbyApi.createNodeId(`${tokens}${nodeName}`),
            internal: {
              type: `${nodeName}`,
              contentDigest: gatsbyApi.createContentDigest(
                colorsTokens[tokens],
              ),
            },
            name: tokens,
          },
        )

        gatsbyApi.actions.createNode(nodeData)
      }
    })
  }

  createTokensColorNode(colorsTokensLM, 'ColorLM')
  createTokensColorNode(colorsTokensAdeo, 'ColorAdeo')
}
