const fs = require('fs')
const { createComponentName } = require('../utils/tools')

const getInfosFromName = (fileName) => {
  const cat = fileName.split('_')[0]

  const size = fileName.replace('.svg', '').split('_').pop()

  const name = fileName
    .replace('.svg', '')
    .replace(cat, '')
    .replace(size, '')
    .slice(1, -1)

  const iconName = fileName
    .replace('.svg', '')
    .replace(cat, '')
    .replace(size, '')
    .replace(/-|_/g, '')

  return {
    cat,
    size,
    name,
    fileName,
    iconName,
  }
}

const generateMonochromListObject = (monochromList) =>
  monochromList.map((icon) => {
    const base = getInfosFromName(icon.fileName)
    const componentName = createComponentName(icon.fileName)

    return {
      ...base,
      componentName,
    }
  })

const checkPath = (outputPath) =>
  new Promise((resolve, reject) => {
    fs.exists(outputPath, (exists) => {
      if (!exists) {
        fs.mkdir(outputPath, { recursive: true }, (err) => {
          if (err) reject(`while trying to create /src/data/ : ${err}`)
          resolve()
        })
      }
      resolve()
    })
  })

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err) reject(`while trying save the file : ${err}`)
      resolve()
    })
  })

/* for testing purpose */
module.exports['getInfosFromName'] = getInfosFromName
module.exports['generateMonochromListObject'] = generateMonochromListObject
module.exports['writeFile'] = writeFile
module.exports['checkPath'] = checkPath
