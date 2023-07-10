import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'
import SubContents from '../components/SubContents'
import PatternStatusGroup from '../components/PatternStatusGroup'
import * as styles from './contentpage.module.css'

const components = {}

const ContentPage = (props) => {
  console.log('ContentPage - props', props)

  const frontmatter = props.pageContext.frontmatter
  const slug = props.pageContext.fields__slug
  const mainCategory = slug.split('/')[1]
  console.log('slug', slug)
  const hasMainCategory = props.path.split('/').length > 3

  console.log('hasMainCategory', hasMainCategory)

  components.SubContents = SubContents(props.location)

  return (
    <Layout location={props.location}>
      <header
        className={`${styles.header} ${
          hasMainCategory ? styles.headerWithCat : ''
        }`}
      >
        {hasMainCategory && (
          <span className={styles.category}>{mainCategory}</span>
        )}
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <PatternStatusGroup status={frontmatter.status} />
      </header>
      <div className={styles.container}>
        <div className={styles.contentMain}>
          <MDXProvider components={components}>{props.children}</MDXProvider>
        </div>
      </div>
    </Layout>
  )
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
