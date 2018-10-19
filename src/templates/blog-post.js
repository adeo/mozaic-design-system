import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Pattern from '../components/pattern'

export default ({ data }) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { pattern: Pattern },
  }).Compiler

  const post = data.markdownRemark
  const otherPosts = data.allMarkdownRemark.edges

  const samePageTabs = otherPosts.filter(({ node }) => {
    const nodePath = node.fields.fileName.relativePath.replace(
      node.fields.fileName.base,
      ''
    )
    const postPath = post.fields.fileName.relativePath.replace(
      post.fields.fileName.base,
      ''
    )
    return nodePath === postPath
  })

  const parentTitle = post.fields.fileName.relativePath
    .replace(post.fields.fileName.base, '')
    .split('/')
    .filter(hash => hash !== '')
    .pop()

  console.log(parentTitle)

  return (
    <Layout>
      <div>
        <h1>{parentTitle}</h1>
        <hr />
        {samePageTabs.map(({ node }) => (
          <div style={{ display: 'inline-block', padding: 5 }}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </div>
        ))}
        <h2>{post.frontmatter.title}</h2>
        <div>{renderAst(post.htmlAst)}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
        fileName {
          name
          base
          relativePath
          extension
        }
      }
      frontmatter {
        title
        order
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            order
          }
          fields {
            slug
            fileName {
              name
              base
              relativePath
              extension
            }
          }
        }
      }
    }
  }
`
