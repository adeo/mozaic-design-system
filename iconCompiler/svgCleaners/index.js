#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
// const svgo = require('svgo')
const { optimize, loadConfig } = require('svgo')

const glob = require('glob')
const validateIconName = require('./validateIconName')
const config = require('../config')
const { traceDeprecation } = require('process')

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

const optimizeIcon = ({ file, data }, configSVG) => {
  const defaultConfig = {
    path: file,
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {},
      },
    ],
  }
  const config = { ...defaultConfig }
  const result = optimize(data, { path: file.toString() })
  return { file, data: configSVG[0].custom.fn(data) }
}

// const customOptimization = (file, data, customOptims) =>
//   new Promise((resolve, reject) => {
//     if (!data.match(/<g id="Square">.*?<\/g>/gi)) {
//       reject(`✗ ERROR : in ${file} Icon should have a group with a "Square" id`)
//     }

//     const newData = customOptims(data)

//     resolve({
//       data: newData,
//       file,
//     })
//   })

const saveIcon = ({ file, data }, outputPath) =>
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

const main = (key, { plugins }) => {
  const sourcePath = config.sourcePaths[key]
  const outputPath = config.outputPaths[key].toString()
  const inputPath = path.relative(process.cwd(), `${sourcePath}/**/*.svg`)

  return new Promise((resolve, reject) => {
    searchAndValidateIconsIn(inputPath)
      .then((icons) => Promise.all(icons.map((icon) => readIcon(icon))))
      .then((icons) =>
        Promise.all(icons.map((icon) => optimizeIcon(icon, plugins)))
      )
      .then((icons) =>
        Promise.all(icons.map((icon) => saveIcon(icon, outputPath)))
      )
      .then((icons) => resolve(icons))
      .catch((err) => reject(err))
  })
}

module.exports = main
