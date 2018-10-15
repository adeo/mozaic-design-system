const path = require(`path`)
const fs = require('fs')
const dirTree = require('directory-tree')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  //console.log('node:', JSON.stringify(node, 0, 2))
}

const getfileContent = path =>
  new Promise((resolve, reject) =>
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err)
      console.log(JSON.stringify(data, 0, 2))

      resolve(data)
    })
  )

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      Promise.all([
        /*graphql(`
          {
            allPattern: allFile(
              filter: { relativePath: { regex: "/.pattern.[html|css|js]/" } }
            ) {
              edges {
                node {
                  extension
                  name
                  dir
                  modifiedTime
                  sourceInstanceName
                  relativePath
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `),*/
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
        `),
      ]).then(res => {
        //console.log(JSON.stringify(res, 0, 2))

        res[0].data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        })
        /*
        const allFilesPromises = () =>
          res[0].data.allPattern.edges.map(pattern => {
            console.log(JSON.stringify(pattern, 0, 2))
            return getfileContent(
              path.resolve('src', pattern.node.relativePath)
            )
          })

        Promise.all(allFilesPromises()).then(fileContents => {
          res[0].data.allPattern.edges.forEach(({ node }, i) => {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/patterns.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
                html: fileContents[i],
              },
            })
          })
        })
*/
        resolve()
      })
    )
  })
}
