import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Changelog from '../components/Changelog'
import ColorPalette from '../components/ColorPalette'
import ComponentStatus from '../components/ComponentStatus'
import Highlight from '../components/Highlight'
import Hint, { HintItem } from '../components/Hint'
import IconViewer from '../components/IconViewer'
import IconsLink from '../gatsby-components/IconsLink/IconsLink'
import InlineCode from '../components/InlineCode'
import Layout from '../components/layout'
import PageTabs from '../components/PageTabs'
import PatternsStatusTable from '../components/PatternsStatusTable'
import Story from '../components/Story'
import SubContents from '../components/SubContents'
import TableOfContents from '../components/TableOfContents'
import { Cross20, CheckCircle20 } from '../components/icons'
import * as styles from './contentpage.module.css'

const components = {
  code: InlineCode,
  Changelog,
  ColorPalette,
  Highlight,
  Hint,
  HintItem,
  IconViewer,
  IconsLink,
  PatternsStatusTable,
  Story,
  SubContents,
  Cross20,
  CheckCircle20,
}

function orderPageTab(tabs) {
  // order using frontmatter order tag and remove index
  const orderedTabs = [...tabs]
    .sort((a, b) => {
      return a.node.frontmatter.order - b.node.frontmatter.order
    })
    .filter((tab) => tab.node.fields.fileName.name !== 'index')

  const cleanIndex = [...tabs].find(
    (tab) => tab.node.fields.fileName.name === 'index',
  )

  const newArr = [
    {
      title: 'Usage', // rename index tab 'Usage'
      slug: cleanIndex.node.fields.slug,
    },
    ...orderedTabs.map((tab) => ({
      title: tab.node.frontmatter.title,
      slug: tab.node.fields.slug,
    })),
  ]

  return newArr
}

const ContentPage = (props) => {
  const { children, data, location, pageContext, path } = props
  console.log('props', props)
  const currentPage = data.mdx
  const allMdx = data.allMdx.edges
  const { tableOfContents } = currentPage

  // Current Page
  const slug = pageContext.fields__slug
  const pageCategory = slug.split('/')[1]
  const hasCategory = path.split('/').length > 3
  components.SubContents = SubContents(location)

  // Tabs
  const samePageTabs = allMdx.filter(({ node }) => {
    const fileName = node.fields.fileName
    const currentFileName = currentPage.fields.fileName

    const nodePath = fileName.relativePath.replace(fileName.base, '')
    const currentPath = currentFileName.relativePath.replace(
      currentFileName.base,
      '',
    )

    return nodePath === currentPath
  })

  // Root Page
  const rootFrontmatter = samePageTabs.find(
    (tab) => tab.node.fields.fileName.name === 'index',
  ).node.frontmatter

  const rootPageTitle = rootFrontmatter.title
  const rootPageStatus = rootFrontmatter.status
  const rootPageLinks = rootFrontmatter.links

  const hasTabs = samePageTabs.length > 1
  const cleanTabs = orderPageTab(samePageTabs)

  return (
    <Layout location={location}>
      <header
        className={`${styles.header} ${
          hasCategory ? styles.headerWithCat : ''
        }`}
      >
        {hasCategory && <span className={styles.category}>{pageCategory}</span>}
        <h1 className={styles.title}>{rootPageTitle}</h1>
        <ComponentStatus status={rootPageStatus} links={rootPageLinks} />
      </header>
      {hasTabs && <PageTabs tabs={cleanTabs} />}
      <div className={styles.container}>
        <div className={styles.contentMain}>
          <MDXProvider components={components}>{children}</MDXProvider>
        </div>
        <TableOfContents tableOfContents={tableOfContents} />
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
          name
          relativePath
        }
        slug
      }
      frontmatter {
        description
        order
        title
      }
      id
      tableOfContents(maxDepth: 10)
    }
    allMdx(sort: { fields: { slug: ASC } }) {
      edges {
        node {
          fields {
            fileName {
              base
              name
              relativePath
            }
            slug
          }
          frontmatter {
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
            }
            title
          }
        }
      }
    }
  }
`

export const Head = ({ pageContext }) => {
  const slug = pageContext.fields__slug.split('/')
  let component = ''
  let title = pageContext.frontmatter.title

  if (slug.length > 4) component = slug[2]
  if (slug.length > 5) component = slug[3]

  const pageTitle = `${component} ${title}`
  const pageDescription = pageContext.frontmatter.description

  return (
    <>
      <title>{pageTitle} – Mozaic Design System</title>
      <meta name="description" content={pageDescription} />
    </>
  )
}
