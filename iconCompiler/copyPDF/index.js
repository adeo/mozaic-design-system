const fsPromises = require('fs').promises
const path = require('path')
const glob = require('glob')
const validatePDFIconName = require('./pdfValidator')
const { outputPaths, sourcePaths } = require('../config')

// create an array of all PDF icons
const searchPDFIconsIn = inputPath =>
  new Promise((resolve, reject) => {
    glob(inputPath, (err, icons) => {
      if (icons.length === 0) {
        reject(`the directory ${inputPath} is empty, or do not exist`)
      }

      if (err) {
        reject(err)
      }

      const errors = icons
        .map(icon => {
          const pdfName = path.basename(icon)
          const sizeDirectory = icon.split(path.sep).reverse()[1]
          return validatePDFIconName(pdfName, sizeDirectory)
        })
        .filter(error => error !== null)

      if (errors.length) {
        reject(errors.join(`\n✗ ERROR : `))
      }

      resolve(icons)
    })
  })

// create an array of all PDF icons
const copyIcons = (icons, dest) =>
  icons.map(icon => {
    const destFile = `${dest}/${path.basename(icon)}`
    return fsPromises.copyFile(icon, destFile)
  })

const copyPDF = key => {
  const source = `${sourcePaths[key]}/**/*.pdf`
  const dest = outputPaths[key]

  return new Promise((resolve, reject) => {
    searchPDFIconsIn(source)
      .then(icons => copyIcons(icons, dest))
      .then(() => resolve())
      .catch(err => reject(err))
  })
}

module.exports = copyPDF
