import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import withSiteMapData from '../SiteMapData'

import './subcontents.scss'

// simple function to build the content HTML structure
const subcontentHtmlList = (content = [], allPreviewsImgs = [], level = 0) => {
  if (!content.length) {
    return false
  }
  const items = content.map(siteMapItem => {
    const { title, slug, dirPath } = siteMapItem
    let { description = '' } = siteMapItem

    // Is there a "preview.png" file for this "siteMapItem"?
    const previewImg = allPreviewsImgs.find(
      elem => elem.node.relativePath === dirPath + '/preview.png'
    )
    let image = false
    if (previewImg && !level) {
      image = (
        <img
          className="subcontents_image"
          src={previewImg.node.publicURL}
          alt={title}
        />
      )
    }
    const content = subcontentHtmlList(siteMapItem.content, allPreviewsImgs, 1)
    if (description) {
      description = (
        <p className="subcontents_description">
          {description.substring(0, 240)}
        </p>
      )
    }

    // SubItem
    if (level) {
      return (
        <Link to={slug} className="subcontents_submenu_item">
          <span className="subcontents_title">{title}</span>
          {description}
        </Link>
      )
    }

    // Main item
    return (
      <li key={slug}>
        <Link className="subcontents_link" to={slug}>
          {image}
          <p className="subcontents_titlendescriptionwrapper">
            <span className="subcontents_title">{title}</span>
            {description}
          </p>
        </Link>
        {content}
      </li>
    )
  })

  if (level) {
    return <div className="subcontents_submenu_wrapper">{items}</div>
  }

  return <ul>{items}</ul>
}

const SubContents = props => {
  const replaceSlashesRegex = /^\/|\/$/g

  const { siteMapData, allPreviewsImgs } = props
  let {
    location: { pathname },
  } = props
  pathname = pathname.replace(replaceSlashesRegex, '').split('/')

  // The element being shown on screen
  let currentElement = siteMapData,
    accumPath = []

  pathname.forEach(path => {
    accumPath.push(path)
    const foundSiteMapItem = currentElement.find(siteMapItem => {
      return (
        siteMapItem.slug.replace(replaceSlashesRegex, '') ===
        accumPath.join('/')
      )
    })
    if (foundSiteMapItem && foundSiteMapItem.content) {
      currentElement = foundSiteMapItem.content
    }
  })

  const subcontentItems = subcontentHtmlList(currentElement, allPreviewsImgs)

  return <div className="subcontents">{subcontentItems}</div>
}

const SubContentsWithQuery = props => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <SubContents allPreviewsImgs={data.allFile.edges} {...props} />
      )}
    />
  )
}

const withLocation = location => {
  const WithSiteMapData = withSiteMapData({ Component: SubContentsWithQuery })
  return props => <WithSiteMapData location={location} {...props} />
}

export default withLocation

const query = graphql`
  query previewImgs {
    allFile(filter: { extension: { eq: "png" }, name: { eq: "preview" } }) {
      edges {
        node {
          publicURL
          relativePath
        }
      }
    }
  }
`
