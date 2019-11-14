#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const svgo = require('svgo')
const glob = require('glob')

const { iconsOutputPath } = require('./config')
const cleanRecreateIconsDirs = require('./cleanRecreateIconsDirs')

const outputPath = iconsOutputPath.svg
const inputPath = path.join(process.cwd(), 'src/icons/**/*.svg')

const logERROR = (name, error) => {
  console.log(`ICON ERROR | in ${name} : ${error}`)
}

/**
 * returns an array of objects: { fileName(string) file name, data(string): svg data }
 */
const main = async () => {
  const mainTask = () => {
    return new Promise((finalRes, finalRej) => {
      glob(inputPath, (er, files) => {
        const newFilesArray = files.map(file => {
          const svgName = path.basename(file)
          const sizeDirectory = file.split(path.sep).reverse()[1]

          if (svgName.includes(' ')) {
            logERROR(svgName, 'icon Filename should not contain spaces')
          }

          if (!svgName.endsWith('px.svg')) {
            logERROR(svgName, 'icon Filename always end with [size]px.svg')
          }

          if (!svgName.includes('_')) {
            logERROR(
              svgName,
              'icon Filename should always start with a category name separated by an underscore "_"'
            )
          }

          if (!svgName.includes(`${sizeDirectory}.svg`)) {
            logERROR(
              svgName,
              'icon File name px value does not match the the related [x]px/ directory'
            )
          }

          return new Promise((res, rej) => {
            fs.readFile(file, 'utf8', (err, data) => {
              if (err) {
                throw err
              }

              return res(optimizeAndSave(svgName, data, sizeDirectory))
            })
          })
        }) // newFilesArray

        Promise.all(newFilesArray)
          .then(fileNameNDataArray => finalRes(fileNameNDataArray))
          .catch(err => finalRej(err))
      }) // glob
    }) // returning Promise
  } // mainTask

  // firstly delete all files in target dir
  await cleanRecreateIconsDirs()

  // Then create cleaned icons files and return an array of objects { fileName(string): file name, data(string): svg data }
  const processedIcons = await mainTask()
  return processedIcons
}

const optimizeAndSave = (svgName, data, size) => {
  const cleanedSVG = customOptimization(data, svgName)

  return new svgo({ plugins: SVGOPlugins })
    .optimize(cleanedSVG)
    .then(result => {
      return saveFile(result.data, svgName, size)
    })
    .catch(err => console.log(data, err))
}

const saveFile = (data, svgName, size) => {
  return new Promise((res, rej) => {
    const savingFile = path.join(outputPath, svgName)
    fs.writeFile(savingFile, data, 'utf8', err => {
      if (err) {
        return rej(err)
      }
      res({ fileName: svgName, data, size })
    })
  })
}

const SVGOPlugins = [
  { cleanupAttrs: true },
  { removeDoctype: true },
  { removeXMLProcInst: true },
  { removeComments: true },
  { removeMetadata: true },
  { removeTitle: true },
  { removeDesc: true },
  { removeUselessDefs: true },
  { removeEditorsNSData: true },
  { removeEmptyAttrs: true },
  { removeHiddenElems: true },
  { removeEmptyText: true },
  { removeEmptyContainers: true },
  { removeViewBox: false },
  { cleanupEnableBackground: true },
  { convertStyleToAttrs: true },
  { convertColors: true },
  { convertPathData: true },
  { convertTransform: true },
  { removeUnknownsAndDefaults: true },
  { removeNonInheritableGroupAttrs: true },
  { removeUselessStrokeAndFill: true },
  { removeUnusedNS: true },
  { cleanupIDs: true },
  { cleanupNumericValues: true },
  { moveElemsAttrsToGroup: true },
  { moveGroupAttrsToElems: true },
  { collapseGroups: true },
  { removeRasterImages: false },
  { mergePaths: true },
  { convertShapeToPath: false },
  { sortAttrs: true },
  { removeDimensions: true },
]

const customOptimization = (data, file) => {
  if (!data.match(/<g id="Square">.*?<\/g>/gi)) {
    logERROR(file, 'Icon should have a group with a "Square" id')
  }

  return data
    .replace(/<style>(.*)<\/style>/g, '')
    .replace(/<defs><\/defs>/g, '')
    .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
    .replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi, '')
    .replace(/<g id="Square">.*?<\/g>/gi, '')
}

module.exports = main
