import { setSlugify } from '.'

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

export const parseAllMdx = (allMdx) => {
  const basedir = 'docs/'
  const finalArray = []

  allMdx.forEach((mdxElem) => {
    const mdxNode = mdxElem.node
    const slug = setSlugify(mdxNode.fields.slug)
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
