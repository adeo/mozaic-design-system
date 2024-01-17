import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { parseAllMdx } from '../../utils/tools'
import * as styles from './subcontents.module.css'

const ListItem = ({ children, slug, title, description }) => (
  <li className={styles.listItem}>
    <Link className={styles.itemLink} to={slug}>
      <div className={styles.itemContent}>
        <span className={styles.itemTitle}>{title}</span>
        {description && (
          <span className={styles.itemDescription}>
            {description.substring(0, 240)}
          </span>
        )}
      </div>
    </Link>
    {children}
  </li>
)

const SubItem = ({ slug, title, description }) => (
  <Link to={slug} className={styles.subItem}>
    <span className={styles.itemTitle}>{title}</span>
    {description && (
      <p className={styles.itemDescription}>{description.substring(0, 240)}</p>
    )}
  </Link>
)

// simple function to build the content HTML structure
const subcontentHtmlList = (content = [], level = 0) => {
  const items = content.map((el) => {
    const { title, slug, description } = el

    const children = !!el.content.length
      ? subcontentHtmlList(el.content, 1)
      : null

    // Main item
    return !level ? (
      <ListItem key={slug} title={title} slug={slug} description={description}>
        {children}
      </ListItem>
    ) : (
      <SubItem
        key={slug}
        title={title}
        slug={slug}
        description={description}
      ></SubItem>
    )
  })

  if (level) {
    return <div className={styles.subWrapper}>{items}</div>
  }

  return <ul className={styles.list}>{items}</ul>
}

const SubContents = (props) => {
  const { location } = props
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: { slug: ASC } }) {
        edges {
          node {
            id
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
        totalCount
      }
    }
  `)

  const mapData = parseAllMdx(data.allMdx.edges)
  const replaceSlashesRegex = /^\/|\/$/g
  const splitPath = location.pathname
    .replace(replaceSlashesRegex, '')
    .split('/')

  // The element being shown on screen
  let currentElement = mapData,
    accumPath = []

  splitPath.forEach((path) => {
    accumPath.push(path)

    const foundSiteMapItem = currentElement.find(
      (el) => el.slug.replace(replaceSlashesRegex, '') === accumPath.join('/'),
    )

    if (foundSiteMapItem && foundSiteMapItem.content) {
      currentElement = foundSiteMapItem.content
    }
  })

  const subpageContent = subcontentHtmlList(currentElement)

  return <div className={styles.container}>{subpageContent}</div>
}

const getSubContents = (location) => {
  return (props) => <SubContents location={location} {...props} />
}

export default getSubContents
