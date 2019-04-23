#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const svgo = require('svgo')
const glob = require('glob')

const currentDir = process.cwd()
const outputPath = path.join(currentDir, 'static/icons/')
const inputPath = path.join(currentDir, 'src/icons/**/*.svg')

let svgName, filePath

glob(inputPath, (er, files) => {
  files.forEach(file => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        throw err
      }

      filePath = file
      svgName = path.basename(filePath)

      optimize(filePath, data)
    })
  })
})

const optimize = (filePath, data) => {
  let svgCleaned = customOptimization(data)
  SVGOoptimization(svgCleaned)
}

const saveFile = data => {
  if (!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath);
  }
  fs.writeFileSync(path.join(outputPath, svgName), data, 'utf8')
}

const customOptimization = data =>
  data
    .replace(/ /g, ' ')
    .replace(/\t/g, '')
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    // .replace('<?xml version="1.0" encoding="UTF-8"?>', '')
    .replace(/>\s+</g, '><')
    .replace(/<g(.*?)>/g, '')
    .replace(/<\/g>/g, '')
    // .replace(/<!--(.*)-->/g, '')
    .replace(/<style>(.*)<\/style>/g, '')
    .replace(/<defs><\/defs>/g, '')
    // .replace(/<title>(.*)<\/title>/g, '')
    // .replace(/<desc>Created with Sketch.<\/desc>/g, '')
    .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
    .replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi, '')
    .replace(/<rect(.*)width="\w+"(.*)height="\w+"\/>/g, '')
    .replace(/<rect(.*)width="\w+"(.*)height="\w+"\/><\/rect>/g, '')
    .replace('<path', '<path fill="#222020"')

const SVGOoptimization = data => {
  new svgo({
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
      saveFile(result.data)
    })
    .catch(err => console.log(data, err))
}
