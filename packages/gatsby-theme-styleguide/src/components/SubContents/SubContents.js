import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import withSiteMapData from '../SiteMapData'
import './subcontents.scss'

const MainItem = ({ children, slug, thumbNail, title, description }) => (
  <li key={slug}>
    <Link className="subcontents__link" to={slug}>
      {thumbNail && (
        <div className="subcontents__thumbnail">
          <img src={thumbNail.node.publicURL} alt={title} />
        </div>
      )}
      <p className="subcontents__body">
        <span className="subcontents__title">{title}</span>
        {description && (
          <span className="subcontents__description">
            {description.substring(0, 240)}
          </span>
        )}
      </p>
    </Link>
    {children}
  </li>
)

const SubItem = ({ slug, title, description }) => (
  <Link to={slug} className="subcontents__submenu-item">
    <span className="subcontents__title">{title}</span>
    {description && (
      <p className="subcontents__description">
        {description.substring(0, 240)}
      </p>
    )}
  </Link>
)

// simple function to build the content HTML structure
const subcontentHtmlList = (content = [], allPreviewsImgs = [], level = 0) => {
  const items = content.map((siteMapItem) => {
    const { title, slug, dirPath, description } = siteMapItem

    // Is there a "preview.png" file for this "siteMapItem"?
    const thumbNail = allPreviewsImgs.find(
      (elem) => elem.node.relativePath === dirPath + '/thumbnail.png'
    )

    const children = !!siteMapItem.content.length
      ? subcontentHtmlList(siteMapItem.content, allPreviewsImgs, 1)
      : null

    // Main item
    return !level ? (
      <MainItem
        key={slug}
        title={title}
        slug={slug}
        thumbNail={thumbNail}
        description={description}
      >
        {children}
      </MainItem>
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
    return <div className="subcontents__submenu-wrapper">{items}</div>
  }

  return <ul>{items}</ul>
}

const SubContents = ({ siteMapData, allPreviewsImgs, location }) => {
  const replaceSlashesRegex = /^\/|\/$/g

  const splitPath = location.pathname
    .replace(replaceSlashesRegex, '')
    .split('/')

  // The element being shown on screen
  let currentElement = siteMapData,
    accumPath = []

  splitPath.forEach((path) => {
    accumPath.push(path)

    const foundSiteMapItem = currentElement.find(
      (siteMapItem) =>
        siteMapItem.slug.replace(replaceSlashesRegex, '') ===
        accumPath.join('/')
    )

    if (foundSiteMapItem && foundSiteMapItem.content) {
      currentElement = foundSiteMapItem.content
    }
  })

  const subcontentItems = subcontentHtmlList(currentElement, allPreviewsImgs)

  return <div className="subcontents">{subcontentItems}</div>
}

const SubContentsWithQuery = (props) => {
  const data = useStaticQuery(graphql`
    query thumbNails {
      allFile(filter: { extension: { eq: "png" }, name: { eq: "thumbnail" } }) {
        edges {
          node {
            publicURL
            relativePath
          }
        }
      }
    }
  `)

  return <SubContents allPreviewsImgs={data.allFile.edges} {...props} />
}

const withLocation = (location) => {
  const WithSiteMapData = withSiteMapData({ Component: SubContentsWithQuery })
  return (props) => <WithSiteMapData location={location} {...props} />
}

export default withLocation
