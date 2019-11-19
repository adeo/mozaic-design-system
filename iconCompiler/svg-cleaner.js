#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const svgo = require('svgo')
const glob = require('glob')

const currentDir = process.cwd()
const outputPath = path.join(currentDir, 'static/icons/')
const inputPath = path.join(currentDir, 'src/icons/**/*.svg')

const logERROR = (name, error) => {
  console.log(`ICON ERROR | in ${name} : ${error}`)
}

glob(inputPath, (er, files) => {
  files.forEach(file => {
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

    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        throw err
      }
      optimize(data, svgName)
    })
  })
})

const optimize = (data, svgName) => {
  const cleanedSVG = customOptimization(data, svgName)

  new svgo({ plugins: SVGOPlugins })
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
    .replace('<svg', '<svg fill="#222020"')
}
