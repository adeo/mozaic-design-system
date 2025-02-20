#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const svgo = require('svgo')
const glob = require('glob')
const validateIconName = require('./validateIconName')
const config = require('../config')

// create an array of all icon
// or return a list of invalid icons names
const searchAndValidateIconsIn = (inputPath) =>
  new Promise((resolve, reject) => {
    glob(inputPath, (err, icons) => {
      if (err) {
        reject(err)
      }

      if (icons.length === 0) {
        reject(`the directory ${inputPath} is empty, or do not exist`)
      }

      const errors = icons
        .map((icon) => {
          const svgName = path.basename(icon)
          const sizeDirectory = icon.split(path.sep).reverse()[1]
          return validateIconName(svgName, sizeDirectory)
        })
        .filter((error) => error !== null)

      if (errors.length) {
        reject(errors.join(`\n✗ ERROR : `))
      }

      resolve(icons)
    })
  })

// read icon from the file system
// and return it's content

const readIcon = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      return resolve({ file, data })
    })
  })

// optimize using SVGO and custom clean options

const optimizeIcon = ({ file, data }, SVGOPlugins, customOptims) =>
  new Promise((resolve, reject) => {
    customOptimization(file, data, customOptims)
      .then(({ file, data }) =>
        new svgo({ plugins: SVGOPlugins })
          .optimize(data)
          .then((result) => resolve({ file, data: result.data }))
          .catch((err) => reject(err))
      )
      .catch((err) => reject(err))
  })

const customOptimization = (file, data, customOptims) =>
  new Promise((resolve, reject) => {
    if (!data.match(/<g id="Square">.*?<\/g>/gi)) {
      reject(`✗ ERROR : in ${file} Icon should have a group with a "Square" id`)
    }

    const newData = customOptims(data)

    resolve({
      data: newData,
      file,
    })
  })

const saveIcon = ({ data, file }, outputPath) =>
  new Promise((resolve, reject) => {
    const fileName = path.basename(file)
    const savingFile = path.join(outputPath, fileName)

    fs.writeFile(savingFile, data, 'utf8', (err) => {
      if (err) {
        reject(err)
      }

      resolve({ fileName, outputPath, data })
    })
  })

const addIds = ({ data, file }) =>
  new Promise((resolve, reject) => {
    const fileName = path.basename(file)
    const id = fileName.split('.').slice(0, -1).join('.')
    data = data.replace('<svg', `<svg id="${id}"`)
    resolve({ data, file })
  })

const main = (key, { SVGOPlugins, custom }) => {
  const sourcePath = config.sourcePaths[key]
  const outputPath = config.outputPaths[key]
  const inputPath = path.relative(process.cwd(), `${sourcePath}/**/*.svg`)

  return new Promise((resolve, reject) => {
    searchAndValidateIconsIn(inputPath)
      .then((icons) => Promise.all(icons.map((icon) => readIcon(icon))))
      .then((icons) =>
        Promise.all(
          icons.map((icon) => optimizeIcon(icon, SVGOPlugins, custom)),
        ),
      )
      .then((icons) =>
        Promise.all(icons.map((icon) => addIds(icon, outputPath))),
      )
      .then((icons) =>
        Promise.all(icons.map((icon) => saveIcon(icon, outputPath))),
      )
      .then((icons) => resolve(icons))
      .catch((err) => reject(err))
  })
}

module.exports = main
