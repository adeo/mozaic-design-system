import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { parseAllFiles } from './tools'

// HOC to centralize Graph queries
export default ({ Component }) => props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        data.directoryTree = parseAllFiles(data.allFile.nodes)
        return <Component centralData={data} {...props} />
      }}
    />
  )
}

const query = graphql`
  query CentralizedData {
    allMdx(sort: { fields: [frontmatter___order], order: DESC }) {
      totalCount
      edges {
        node {
          id
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
          excerpt
        }
      }
    }
    allFile(filter: { absolutePath: { regex: "//src/docs//" } }) {
      totalCount
      nodes {
        absolutePath
        name
      }
    }
  }
`
