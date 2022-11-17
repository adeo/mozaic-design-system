const fs = require('fs')
const path = require('path')
const iconsModules = require('./iconsModules')
const iconsCommon = require('./iconsCommon')
const { createComponentName } = require('../utils/tools')
const config = require('../config')

const generateIconsModules = (icons) =>
  new Promise((res, rej) => {
    // Modules
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

    // Typescript
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

    const writeTypeScriptFileCommon = path.join(
      process.cwd(),
      config.outputPaths.js,
      'icons.common.d.ts'
    )

    fs.writeFile(
      writeTypeScriptFileCommon,
      "declare module '@mozaic-ds/icons/js/icons.common'",
      'utf8',
      (err) => {
        if (err) rej(err)
        res(true)
      }
    )

    // Common

    const dataCommon = iconsCommon(icons)

    const writePathCommon = path.join(
      process.cwd(),
      config.outputPaths.js,
      'icons.common.js'
    )

    fs.writeFile(writePathCommon, dataCommon, 'utf8', (err) => {
      if (err) rej(err)
      res(true)
    })

    // Prepare export
    let exported = `\nmodule.exports = {\n `
    icons.map((icon) => {
      exported += `${createComponentName(icon.fileName)},\n`
    })
    exported += `\n };`

    fs.appendFile(writePathCommon, exported, 'utf8', (err) => {
      if (err) rej(err)
      res(true)
    })
  })

module.exports = generateIconsModules
