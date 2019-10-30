/*
basedir = '/src/docs' - using allFile
basedir = 'docs' - using allMdx
*/

export const parseAllFiles = (list, { basedir = 'docs/', location } = {}) => {
  const finalArray = []

  // find dir obj
  const findDirObj = (array, path) => {
    return array.find(elem => elem.path === path)
  }

  list.forEach(elem => {
    // allMdx
    elem = elem.node
    const absPath = elem.fields.fileName.relativePath
    const slug = elem.fields.slug

    const index = absPath.indexOf(basedir)
    const path1 = absPath.substring(index)
    const subpath1 = path1.replace(basedir, '')
    const pathArray = subpath1.split('/')
    pathArray.pop()
    const level = pathArray.length

    const { title, order } = elem.frontmatter

    let actualElem,
      lookingArray = finalArray,
      accumPath = basedir

    pathArray.forEach(lookingPath => {
      accumPath += '/' + lookingPath
      accumPath = accumPath.replace('//', '/')
      const pathFiltered = accumPath.replace('docs', '')
      actualElem = findDirObj(lookingArray, accumPath)
      if (!actualElem) {
        actualElem = {
          path: accumPath,
          dirPath: accumPath,
          name: lookingPath,
          slug,
          level,
          title,
          order,
          type: 'directory',
          content: [],
          isOpened: location.includes(pathFiltered),
          isPartOfCurrentlocation: location.includes(pathFiltered),
        }
        lookingArray.push(actualElem)
      }
      lookingArray = actualElem.content
    })
  })

  const orderArray = array => {
    array.sort((a, b) => a.order - b.order)
    array.forEach(elem => {
      if (elem.content) {
        orderArray(elem.content)
      }
    })
  }

  orderArray(finalArray)
  return finalArray
}
