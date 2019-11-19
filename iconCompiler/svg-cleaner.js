#! /usr/bin/env node
const fs = require('fs')
const rimraf = require('rimraf')
const path = require('path')
const svgo = require('svgo')
const glob = require('glob')

const currentDir = process.cwd()
const outputPath = path.join(currentDir, 'static/icons/')
const inputPath = path.join(currentDir, 'src/icons/**/*.svg')

const logERROR = (name, error) => {
  console.log(`ICON ERROR | in ${name} : ${error}`)
}



// verifying if outputPath exists (just one time)
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath)
}

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
// Promise based rimraf
const promiseRimRaf = globDir => {
  return new Promise((res, rej) => {
    rimraf(globDir, err => {
      if (err) {
        return rej(err)
      }
      res(true)
    })
  })
}

const main = async () => {
  // verifying if outputPath exists (just one time)
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
  }

  const mainTask = () => {
    return new Promise((finalRes, finalRej) => {
      glob(inputPath, (er, files) => {
        const newFilesArray = files.map(file => {
          return new Promise((res, rej) => {
            fs.readFile(file, 'utf8', (err, data) => {
              if (err) {
                throw err
              }

              const svgName = path.basename(file)
              return res(optimize(svgName, data))
            })
          })
        })

        // waiting for all files to be saved!
        Promise.all(newFilesArray)
          .then(ret => {
            const qtd = ret.length
            console.log(`All ${qtd} icons created successfully!`)
            finalRes(ret)
          })
          .catch(err => {
            console.err('Error creating icons!', err)
            finalRej(err)
          })
      })
    })
  }) // newFilesArray

  // waiting for all files to be saved!
  return Promise.all(newFilesArray)
    .then(ret => {
      const qtd = ret.length
      console.log(`All ${qtd} icons created successfully!`)
    })
    .catch(err => {
      console.err('Error creating icons!', err)
    })
})
  }

  // firstly delete all files in target dir
  await promiseRimRaf(outputPath + '*')

  // Then create cleaned icons files and return an array of raw (svg) icon data
  const processedIcons = await mainTask()
  return processedIcons
}


const optimize = (data, svgName) => {
  const cleanedSVG = customOptimization(data, svgName)

  return new svgo({ plugins: SVGOPlugins })
    .optimize(cleanedSVG)
    .then(result => {
      saveFile(result.data, svgName)
    })
    .catch(err => console.log(data, err))
}

const saveFile = (data, svgName) => {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
  }

  fs.writeFileSync(path.join(outputPath, svgName), data, 'utf8')
const optimize = (svgName, data) => {
  const svgCleaned = customOptimization(data)
  return SVGOoptimization(svgCleaned, svgName)
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

  return data
    .replace(/<style>(.*)<\/style>/g, '')
    .replace(/<defs><\/defs>/g, '')
    .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
    .replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi, '')
    .replace(/<g id="Square">.*?<\/g>/gi, '')
    // .replace('<svg', '<svg fill="#222020"')
    .replace(/<rect(.*)width="\w+"(.*)height="\w+"\/>/g, '')
    .replace(/<rect(.*)width="\w+"(.*)height="\w+"\/><\/rect>/g, '')
// .replace('<path', '<path fill="#888888"')

const SVGOoptimization = (data, svgName) => {
  return new svgo({
    plugins: [
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
      { convertShapeToPath: true },
      { sortAttrs: true },
      { removeDimensions: true },
    ],
  })
    .optimize(data)
    .then(result => {
      return saveFile(result.data, svgName)
    })
    .catch(err => console.log(data, err))
} // SVGOoptimization

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
