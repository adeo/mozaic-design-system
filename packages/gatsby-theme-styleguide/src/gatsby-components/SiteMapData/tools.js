export const parseAllFiles = (allMdx, { basedir = 'docs/', location } = {}) => {
  const finalArray = []

  // find if that piece of path already exists in "finalArray"
  const findAlreadyCreatedPathObj = (array, path) => {
    return array.find((elem) => elem.path === path)
  }

  allMdx.forEach((mdxElem) => {
    mdxElem = mdxElem.node
    const relativePath = mdxElem.fields.fileName.relativePath
    const slug = mdxElem.fields.slug

    const pathNoBaseDir = relativePath.replace(basedir, '')
    const pathArray = pathNoBaseDir.split('/')
    pathArray.pop()
    const level = pathArray.length

    const { title, order, description } = mdxElem.frontmatter

    let pathObj,
      // "lookinArray" starts being "finalArray" and becomes "content" property according to the loop
      lookingArray = finalArray,
      accumPath = basedir

    pathArray.forEach((lookingPath) => {
      accumPath += '/' + lookingPath
      accumPath = accumPath.replace('//', '/')

      // does this path already exist in lookingArray?
      pathObj = findAlreadyCreatedPathObj(lookingArray, accumPath)
      if (!pathObj) {
        pathObj = {
          path: accumPath,
          dirPath: accumPath,
          name: lookingPath,
          slug,
          level,
          title,
          order,
          description,
          type: 'directory',
          content: [],
        }
        lookingArray.push(pathObj)
      }
      lookingArray = pathObj.content
    })
  })

  // order the "finalArray" by the "order" property recursively
  // "order" = the order the menu items are shown
  const orderSiteMapArray = (siteMapArray) => {
    siteMapArray.sort((a, b) => a.order - b.order)
    siteMapArray.forEach((siteMapItem) => {
      if (siteMapItem.content) {
        orderSiteMapArray(siteMapItem.content)
      }
    })
  }

  orderSiteMapArray(finalArray)
  return finalArray
}

// parse "siteMapArray" "path" props and creates
// "isOpened" and "isPartOfCurrentlocation" props whether
// given "location" matches the "path" prop
export const parseLocation = (siteMapArray, location = '') => {
  if (location) {
    if (location.pathname) {
      location = location.pathname
    }
  }

  // "contentArray" will be "siteMapArray" and recursively all
  // Its "content" props
  const parseLocationRecursively = (contentArray) => {
    return contentArray.map((pathObj) => {
      const pathFiltered = pathObj.path.replace('docs', '')
      pathObj.isOpened = location.includes(pathFiltered)
      pathObj.isPartOfCurrentlocation = location.includes(pathFiltered)
      if (pathObj.content && pathObj.content.length) {
        pathObj.content = parseLocationRecursively(pathObj.content)
      }
      return pathObj
    })
  }

  const result = parseLocationRecursively(siteMapArray)

  return result
}
