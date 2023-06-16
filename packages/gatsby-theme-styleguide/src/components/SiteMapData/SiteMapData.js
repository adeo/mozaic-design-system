import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { parseAllFiles } from './tools'

// HOC to centralize site structure (site map)
const siteMapData =
  ({ Component }) =>
  (props) => {
    const location =
      props.location && props.location.pathname ? props.location.pathname : ''

    const data = useStaticQuery(query)
    const mapData = parseAllFiles(data.allMdx.edges, {
      location,
    })

    return <Component siteMapData={mapData} {...props} />
  }

export default siteMapData

const query = graphql`
  query SiteMapData {
    allMdx(sort: { fields: { slug: ASC } }) {
      edges {
        node {
          frontmatter {
            title
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
