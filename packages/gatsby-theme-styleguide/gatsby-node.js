const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `docs` })
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

  if (node.internal.type === `Preview`) {
    const slug = node.path

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      allPreview {
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
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  const previews = result.data.allPreview.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.join(__dirname, 'src', 'templates', 'pattern-page.js'),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })

  previews.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.join(__dirname, 'src', 'templates', 'preview-page.js'),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
