import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Pattern from '../components/pattern'

export default ({ data }) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { pattern: Pattern },
  }).Compiler

  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1 className="toto">{post.frontmatter.title}</h1>
        <div>{renderAst(post.htmlAst)}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
