import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'
import SubContents from '../components/SubContents'
import PatternStatusGroup from '../components/PatternStatusGroup'
import PageTabs from '../components/PageTabs'
import Highlight from '../components/Highlight'
import Hint, { HintItem } from '../components/Hint'
import IconViewer from '../components/IconViewer'
import InlineCode from '../components/InlineCode'
import * as styles from './contentpage.module.css'

const components = {
  Highlight,
  Hint,
  HintItem,
  IconViewer,
  InlineCode: InlineCode,
}

const ContentPage = (props) => {
  // console.log('ContentPage - props', props)
  const currentPage = props.data.mdx

  const frontmatter = props.pageContext.frontmatter
  const slug = props.pageContext.fields__slug
  const mainCategory = slug.split('/')[1]
  // console.log('slug', slug)
  const hasMainCategory = props.path.split('/').length > 3
  // console.log('hasMainCategory', hasMainCategory)
  components.SubContents = SubContents(props.location)

  // const otherPosts = data.allMdx.edges
  // console.log('otherPosts', props)

  // const samePageTabs = [...otherPosts].filter(({ node }) => {
  //   const nodePath = node.fields.fileName.relativePath.replace(
  //     node.fields.fileName.base,
  //     ''
  //   )
  //   const postPath = post.fields.fileName.relativePath.replace(
  //     post.fields.fileName.base,
  //     ''
  //   )
  //   return nodePath === postPath
  // })

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
      {/* {hasTabs && <PageTabs samePageTabs={samePageTabs} />} */}
      <PageTabs currentPage={currentPage} />
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
  query MdxQuery($fields__slug: String) {
    mdx(fields: { slug: { eq: $fields__slug } }) {
      fields {
        fileName {
          base
          internal {
            contentFilePath
          }
          name
          relativePath
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
      tableOfContents(maxDepth: 10)
    }
  }
`

export const Head = ({ pageContext }) => {
  return (
    <>
      <title>{pageContext.frontmatter.title} – Mozaic Design System</title>
      <meta name="description" content={pageContext.frontmatter.description} />
    </>
  )
}
