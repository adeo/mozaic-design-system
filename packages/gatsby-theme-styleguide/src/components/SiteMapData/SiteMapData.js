import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { parseAllMdx } from '../../utils/tools'

// HOC to centralize site structure (site map)
const siteMapData =
  ({ Component }) =>
  (props) => {
    const location =
      props.location && props.location.pathname ? props.location.pathname : ''

    const data = useStaticQuery(query)
    const mapData = parseAllMdx(data.allMdx.edges)

    return <Component siteMapData={mapData} {...props} />
  }

export default siteMapData

const query = graphql`
  query SiteMapData {
    allMdx(sort: { fields: { slug: ASC } }) {
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
