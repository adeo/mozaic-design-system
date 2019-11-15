const express = require('express')
var mkdirp = require('mkdirp')
const path = require(`path`)
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

let previewsPath = []

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
    const slug = node.path.split('docs').pop()

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
            codes {
              css
              html
              js
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

  // Create previews html pages into static folder
  previews.forEach(({ node }) => {
    const fileName = `static${node.fields.slug.split('docs/').pop()}`
    const pathName = fileName
    const str = pathName.substr(pathName.lastIndexOf('/') + 1)

    previewsPath.push(`${node.fields.slug}`) // Add path to the list for tests purposes

    mkdirp(pathName.replace(str, ''), function(err) {
      if (err) return cb(err)
      let stream = fs.createWriteStream(`${fileName}.html`)
      stream.once('open', function(fd) {
        const html = buildHtml(node)
        stream.end(html)
      })
    })
  })

  // Minimal builder for html previews
  const buildHtml = data => {
    var header = data.codes.css
    var body = data.codes.html
    return (
      '<!DOCTYPE html>' +
      '<html><head><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><style>' +
      header +
      '</style></head><body>' +
      body +
      '</body></html>'
    )
  }

  // Create an array with all the previews path. Used for testing purposes
  const content = `module.exports =${JSON.stringify(previewsPath, 0, 2)}`
  fs.writeFile('./test/previewsPath.js', content, err => {
    if (err) throw err
    console.log('Previews path list file created (/test/previewsPath.js)')
  })
}
