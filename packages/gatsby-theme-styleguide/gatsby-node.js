const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const fileName = path.basename(node.fileAbsolutePath)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      node,
      name: `fileName`,
      value: fileName,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) =>
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
      .then(res => {
        res.data.allMarkdownRemark.edges.map(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.join(
              __dirname,
              'src',
              'templates',
              'pattern-page.js'
            ),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        })

        resolve()
      })
      .catch(err => {
        reject(err)
      })
  )
}
