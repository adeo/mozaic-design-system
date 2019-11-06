import React from 'react'
import { Link } from 'gatsby'
import withSiteMapData from '../SiteMapData'

import './subcontents.scss'

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
      image = <img className="subcontents_image" src={image} alt={title} />
    } catch (e) {
      image = false
    }

    const content = subcontentHtmlList(siteMapItem.content)
    if (description) {
      description = (
        <p className="subcontents_description">
          {description.substring(0, 240)}
        </p>
      )
    }

    return (
      <li key={slug}>
        <Link className="subcontents_link" to={slug}>
          {image}
          <span className="subcontents_title">{title}</span>
          {description}
        </Link>
        {content}
      </li>
    )
  })
  return <ul>{items}</ul>
}

const SubContents = props => {
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

  return <div className="subcontents">{subcontentItems}</div>
}

const withLocation = location => {
  const WithSiteMapData = withSiteMapData({ Component: SubContents })
  return props => <WithSiteMapData location={location} {...props} />
}

export default withLocation
