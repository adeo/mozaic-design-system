const fs = require('fs')
const path = require('path')
const iconsModules = require('./iconsModules')
const config = require('../config')

const generateIconsModules = (icons) =>
  new Promise((res, rej) => {
    const data = iconsModules(icons)

    const writePath = path.join(
      process.cwd(),
      config.outputPaths.js,
      'icons.js'
    )

    fs.writeFile(writePath, data, 'utf8', (err) => {
      if (err) rej(err)
      res(true)
    })

    // TypeScript Declaration File
    const writeTypeScriptFile = path.join(
      process.cwd(),
      config.outputPaths.js,
      'icons.d.ts'
    )

    fs.writeFile(
      writeTypeScriptFile,
      "declare module '@mozaic-ds/icons/js/icons'",
      'utf8',
      (err) => {
        if (err) rej(err)
        res(true)
      }
    )
  })

module.exports = generateIconsModules
