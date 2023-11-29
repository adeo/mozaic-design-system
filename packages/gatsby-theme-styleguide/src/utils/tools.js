import slugify from '@sindresorhus/slugify'

/**
 * Find if that piece of path already exists in "finalArray"
 */
// function findAlreadyCreatedPathObj(array, path) {
//   return array.find((elem) => elem.path === path)
// }

/**
 * Order an array recursively according to the "order" property
 * "order" = the order in which menu items are displayed
 */
function orderSiteMapArray(siteMapArray) {
  siteMapArray.sort((a, b) => a.order - b.order)
  siteMapArray.forEach((siteMapItem) => {
    if (siteMapItem.content) {
      orderSiteMapArray(siteMapItem.content)
    }
  })
}

// export const parseAllMdx = (allMdx, { basedir = 'docs/', location } = {}) => {
export const parseAllMdx = (allMdx) => {
  const basedir = 'docs/'
  const finalArray = []

  allMdx.forEach((mdxElem) => {
    /**
     * Nouveau Code
     */

    /*
    const { path, pageContext } = mdxElem.node
    const { fields__slug: pathNoBaseDir, frontmatter } = pageContext
    const { title, order, description } = frontmatter
    const pathArray = pathNoBaseDir.split('/')
    pathArray.pop()
    pathArray.shift()
    const level = pathArray.length
    const slug = path
    */

    /**
     * Ancien Code
     */
    const mdxNode = mdxElem.node
    const slug = slugify(mdxNode.fields.slug, { preserveCharacters: ['/'] })
    const { title, order, description } = mdxNode.frontmatter
    const relativePath = mdxNode.fields.fileName.relativePath
    const pathNoBaseDir = relativePath.replace(basedir, '')
    const pathArray = pathNoBaseDir.split('/')
    pathArray.pop()
    const level = pathArray.length

    // "lookinArray" starts being "finalArray" and becomes "content" property according to the loop
    let pathObj
    let lookingArray = finalArray

    let accumPath = basedir

    pathArray.forEach((element) => {
      accumPath += '/' + element
      accumPath = accumPath.replace('//', '/')

      // does this path already exist in lookingArray?
      pathObj = lookingArray.find((elem) => elem.path === accumPath)

      if (!pathObj) {
        pathObj = {
          path: accumPath,
          dirPath: accumPath,
          name: element,
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

  orderSiteMapArray(finalArray)
  return finalArray
}

// parse "siteMapArray" "path" props and creates
// "isOpened" and "isPartOfCurrentlocation" props whether
// given "location" matches the "path" prop
// export const parseLocation = (siteMapArray, location = '') => {
//   if (location) {
//     if (location.pathname) {
//       location = location.pathname
//     }
//   }

//   // "contentArray" will be "siteMapArray" and recursively all
//   // Its "content" props
//   const parseLocationRecursively = (contentArray) => {
//     return contentArray.map((pathObj) => {
//       const pathFiltered = pathObj.path.replace('docs', '')
//       pathObj.isOpened = location.includes(pathFiltered)
//       pathObj.isPartOfCurrentlocation = location.includes(pathFiltered)
//       if (pathObj.content && pathObj.content.length) {
//         pathObj.content = parseLocationRecursively(pathObj.content)
//       }
//       return pathObj
//     })
//   }

//   const result = parseLocationRecursively(siteMapArray)

//   return result
// }
