const express = require('express')
const path = require('path')
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)
const postTemplate = path.resolve(`${__dirname}/src/templates/pattern-page.js`)

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

  if (node.internal.type === `Preview`) {
    const slug = node.path.split('docs').pop()

    createNodeField({
      node,
      name: `slug`,
      value: slug,
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

// Create preview html
const createPreviewHtmlFile = (node) =>
  new Promise((resolve, reject) => {
    const destDir = `public/previews${node.fields.slug
      .split('/')
      .slice(0, -1)
      .join('/')}`

    const fileName = node.fields.slug.split('/').pop()

    fs.mkdir(destDir, { recursive: true }, (err) => {
      if (err) reject(err)
      fs.writeFile(`${destDir}/${fileName}.html`, buildHtml(node), (error) => {
        if (error) reject(error)
        resolve()
      })
    })
  })

// build previews for each node
const createPreviewPages = (previews, previewsPath, reporter) => {
  // Create previews html pages into static folder
  const previewPromiseMap = previews.map(({ node }) => {
    // Add path to the list for tests purposes if it does not exist
    if (!previewsPath.includes(node.fields.slug)) {
      previewsPath.push(node.fields.slug)
    }

    return createPreviewHtmlFile(node)
  })

  Promise.all(previewPromiseMap)
    .then(() => {
      reporter.success('preview files generated')
    })
    .catch((err) => reporter.panicOnBuild(err))
}

// Minimal builder for html previews
const buildHtml = (data) => {
  var generatedStyles = data.codes.css
  var body = data.codes.html
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <style type="text/css">
            * {
              box-sizing: padding-box;
            }
            
            body, html {
              margin :0;
              padding :0;
              display: block;
              overflow: hidden
            }
          </style>
          <style>${generatedStyles}</style>
        </head>
        <body>
          ${body}
        </body>
      </html>
    `
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
      allPreview {
        nodes {
          codes {
            css
            html
            js
          }
          fields {
            slug
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

  const previews = result.data.allPreview.nodes
  debounce(createPreviewPages(previews, previewsPath, reporter), 1000)
}
