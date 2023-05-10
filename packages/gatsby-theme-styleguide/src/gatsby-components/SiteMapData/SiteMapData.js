import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { parseAllFiles } from './tools'

// HOC to centralize site structure (site map)
const siteMapData =
  ({ Component }) =>
  (props) => {
    const location =
      props.location && props.location.pathname ? props.location.pathname : ''
    return (
      <StaticQuery
        query={query}
        render={(data) => {
          const mapData = parseAllFiles(data.allMdx.edges, {
            location,
          })
          return <Component siteMapData={mapData} {...props} />
        }}
      />
    )
  }

export default siteMapData

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
            description
          }
          fields {
            slug
            fileName {
              name
              relativePath
              extension
            }
          }
        }
      }
    }
  }
`
