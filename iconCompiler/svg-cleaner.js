#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const svgo = require('svgo')
const glob = require('glob')

const { dirsIconsStatic } = require('./config')
const cleanRecreateIconsDirs = require('./cleanRecreateIconsDirs')

const currentDir = process.cwd()
// const outputPath = path.join(currentDir, 'static/icons/')
const outputPath = dirsIconsStatic[0]
const inputPath = path.join(currentDir, 'src/icons/**/*.svg')

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
            logERROR(svgName, 'icon Filename should not have contain spaces')
          }

          if (!svgName.endsWith('px.svg')) {
            logERROR(svgName, 'icon Filename alway end with [size]px.svg')
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

              return res(optimizeAndSave(svgName, data))
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

const optimizeAndSave = (svgName, data) => {
  const cleanedSVG = customOptimization(data, svgName)

  return new svgo({ plugins: SVGOPlugins })
    .optimize(cleanedSVG)
    .then(result => {
      return saveFile(result.data, svgName)
    })
    .catch(err => console.log(data, err))
}

const saveFile = (data, svgName) => {
  return new Promise((res, rej) => {
    const savingFile = path.join(outputPath, svgName)
    fs.writeFile(savingFile, data, 'utf8', err => {
      if (err) {
        return rej(err)
      }
      res({ fileName: svgName, data })
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

  return (
    data
      .replace(/<style>(.*)<\/style>/g, '')
      .replace(/<defs><\/defs>/g, '')
      .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
      .replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi, '')
      .replace(/<g id="Square">.*?<\/g>/gi, '')
      // .replace('<svg', '<svg fill="#222020"')
      .replace(/<rect(.*)width="\w+"(.*)height="\w+"\/>/g, '')
      .replace(/<rect(.*)width="\w+"(.*)height="\w+"\/><\/rect>/g, '')
  )
}

// const SVGOoptimization = (data, svgName) => {
//   return new svgo({
//     plugins: [
//       { cleanupAttrs: true },
//       { removeDoctype: true },
//       { removeXMLProcInst: true },
//       { removeComments: true },
//       { removeMetadata: true },
//       { removeTitle: true },
//       { removeDesc: true },
//       { removeUselessDefs: true },
//       { removeEditorsNSData: true },
//       { removeEmptyAttrs: true },
//       { removeHiddenElems: true },
//       { removeEmptyText: true },
//       { removeEmptyContainers: true },
//       { removeViewBox: false },
//       { cleanupEnableBackground: true },
//       { convertStyleToAttrs: true },
//       { convertColors: true },
//       { convertPathData: true },
//       { convertTransform: true },
//       { removeUnknownsAndDefaults: true },
//       { removeNonInheritableGroupAttrs: true },
//       { removeUselessStrokeAndFill: true },
//       { removeUnusedNS: true },
//       { cleanupIDs: true },
//       { cleanupNumericValues: true },
//       { moveElemsAttrsToGroup: true },
//       { moveGroupAttrsToElems: true },
//       { collapseGroups: true },
//       { removeRasterImages: false },
//       { mergePaths: true },
//       { convertShapeToPath: true },
//       { sortAttrs: true },
//       { removeDimensions: true },
//     ],
//   })
//     .optimize(data)
//     .then(result => {
//       return saveFile(result.data, svgName)
//     })
//     .catch(err => console.log(data, err))
// } // SVGOoptimization

// main()
// .then(ret=>{
//   console.log('First item',ret[0])
//   return generateIconComponents(ret)
// })
// .then(ret=>{
//   console.log('COMPONENTS FILE GENERATED!!',ret)

// })
// .catch(err=>{
//   console.log('###################################');
//   console.log('###################################');
//   console.log('FINAL ERROR');
//   console.log(err);
// })

module.exports = main
