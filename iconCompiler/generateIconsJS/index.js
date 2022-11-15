const fs = require('fs')
const path = require('path')
const iconsModules = require('./iconsModules')
const config = require('../config')
const { createComponentName } = require('../utils/tools')

const generateIconsModules = (icons) =>
  new Promise((res, rej) => {
    // All icons files
    icons.map((icon) => {
      const iconName = createComponentName(icon.fileName)
      const iconData = iconsModules(icon)

      const singleIconPath = path.join(
        process.cwd(),
        `${config.outputPaths.js}/${iconName}`,
        `${iconName}.js`
      )
      fs.writeFileSync(singleIconPath, iconData, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })

      /*
      const mainIconsPath = path.join(
        process.cwd(),
        config.outputPaths.js,
        'icons.js'
      )

      fs.appendFile(mainIconsPath, iconData, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })
      */

      /*
      const dataSvelte = transpilers[framework].transpiler(icon)
      const parsedName = createComponentName(icon.fileName)
      const defineRegistry = declareWebRegistry(parsedName, icon)
      const writeIndex = path.join(
        process.cwd(),
        config.outputPaths[framework],
        'icons.js'
      )
      const writePath = path.join(
        process.cwd(),
        config.outputPaths[framework],
        `${parsedName}.svelte`
      )
      // Write individual svelte file
      fs.writeFile(writePath, dataSvelte, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })
      // Define web component in registry
      fs.appendFile(writeIndex, defineRegistry, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })
      */
    })

    // Icons.js
    // const data = iconsModules(icons)
    // console.log(data)

    // const writePath = path.join(
    //   process.cwd(),
    //   config.outputPaths.js,
    //   'icons.js'
    // )

    // fs.writeFile(writePath, data, 'utf8', (err) => {
    //   if (err) rej(err)
    //   res(true)
    // })

    // TypeScript Declaration File
    // const writeTypeScriptFile = path.join(
    //   process.cwd(),
    //   config.outputPaths.js,
    //   'icons.d.ts'
    // )

    // fs.writeFile(
    //   writeTypeScriptFile,
    //   "declare module '@mozaic-ds/icons/js/icons'",
    //   'utf8',
    //   (err) => {
    //     if (err) rej(err)
    //     res(true)
    //   }
    // )
  })

module.exports = generateIconsModules
