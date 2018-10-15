import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  console.log(JSON.stringify(data, 0, 2))

  return (
    <Layout>
      <h1>Adeo Deisign system</h1>
      <Link to="/page-2/">Go to page 2</Link>

      <hr />
      <ul />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
