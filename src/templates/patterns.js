/*import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.allPattern

  console.log(JSON.stringify(data, 0, 2))

  return <div id="CONTENT" dangerouslySetInnerHTML={{ __html: post.html }} />
}

export const query = graphql`
  query($slug: String!) {
    allPattern {
      edges {
        node {
          extension
          name
          dir
          modifiedTime
          sourceInstanceName
          relativePath
          fields {
            slug
            html
          }
        }
      }
    }
  }
`

*/
