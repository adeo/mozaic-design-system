import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { parseAllFiles } from './tools'

// HOC to centralize site structure (site map)
export default ({ Component }) => props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const siteMapData = parseAllFiles(data.allMdx.edges, {
          location: props.location.pathname,
        })
        return <Component siteMapData={siteMapData} {...props} />
      }}
    />
  )
}

const query = graphql`
  query SiteMapData {
    allMdx(sort: { fields: [fields___slug], order: ASC }) {
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
  }
`
