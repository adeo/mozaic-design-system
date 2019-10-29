export const parseAllFiles = (list, { basedir = '/src/docs' } = {}) => {
  const finalArray = []
  list = list.filter(elem => elem.absolutePath.indexOf(basedir) > -1)

  // find dir obj
  const findDirObj = (array, path) => {
    return array.find(elem => elem.path === path)
  }

  list.forEach(elem => {
    const absPath = elem.absolutePath
    const index = absPath.indexOf(basedir)
    const path1 = absPath.substring(index)
    const subpath1 = path1.replace(basedir, '')
    const pathArray = subpath1.split('/')
    const file = pathArray.pop()

    let actualElem,
      lookingArray = finalArray,
      accumPath = basedir

    pathArray.forEach(lookingPath => {
      accumPath += '/' + lookingPath
      accumPath = accumPath.replace('//', '/')
      actualElem = findDirObj(lookingArray, accumPath)
      if (!actualElem) {
        actualElem = {
          path: accumPath,
          name: lookingPath,
          type: 'directory',
          content: [],
        }
        lookingArray.push(actualElem)
      }
      lookingArray = actualElem.content
    })
    actualElem.content.push({
      path: basedir + pathArray.join('/') + '/' + file,
      name: file,
      type: 'file',
    })
  })

  return finalArray
}
