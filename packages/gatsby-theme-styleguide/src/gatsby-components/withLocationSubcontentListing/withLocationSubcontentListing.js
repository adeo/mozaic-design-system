import React from 'react'
import { Link } from 'gatsby'
import withSiteMapData from '../SiteMapData'

import './subcontentlisting.scss'

// simple function to build the content HTML structure
const subcontentHtmlList = (content = []) => {
  if (!content.length) {
    return false
  }
  const items = content.map(siteMapItem => {
    const { title, slug, dirPath } = siteMapItem
    let { description = '' } = siteMapItem
    let image
    try {
      image = require(`../../../../../src/${dirPath}/preview.png`)
      image = (
        <img className="subcontentlisting_image" src={image} alt={title} />
      )
    } catch (e) {
      image = false
    }

    const content = subcontentHtmlList(siteMapItem.content)
    if (description) {
      description = (
        <p className="subcontentlisting_description">
          {description.substring(0, 240)}
        </p>
      )
    }

    return (
      <li key={slug}>
        <Link className="subcontentlisting_link" to={slug}>
          {image}
          <span className="subcontentlisting_title">{title}</span>
          {description}
        </Link>
        {content}
      </li>
    )
  })
  return <ul>{items}</ul>
}

const SubcontentListing = props => {
  const replaceSlashesRegex = /^\/|\/$/g

  const { siteMapData } = props
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

  const subcontentItems = subcontentHtmlList(currentElement)

  return <div className="subcontentlisting">{subcontentItems}</div>
}

const withLocation = location => {
  const WithSiteMapData = withSiteMapData({ Component: SubcontentListing })
  return props => <WithSiteMapData location={location} {...props} />
}

export default withLocation
