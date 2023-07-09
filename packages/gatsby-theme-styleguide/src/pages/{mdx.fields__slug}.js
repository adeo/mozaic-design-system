import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'

const ContentPage = (props) => {
  console.log('ContentPage ---- ', props)
  return <p>Ceci est un texte!</p>
  // <Layout location={location}>
  // <MDXProvider components={shortcodes}>
  //   <Main id="scroller">{children}</Main>
  // </MDXProvider>
  // </Layout>
}

export default ContentPage

export const query = graphql`
  query ($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        fileName {
          base
          internal {
            contentFilePath
          }
        }
        slug
      }
      frontmatter {
        description
        links {
          freemarker {
            link
            status
          }
          react {
            link
            status
          }
          vue {
            link
            status
          }
          webComponent {
            link
            status
          }
        }
        order
        status {
          figma
          react
          scss
          sketch
        }
        title
      }
      id
      tableOfContents
    }
  }
`
