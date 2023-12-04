const fs = require('fs')
const path = require('path')
const vueIconsIndex = require('./iconsVue')
const config = require('../config')
const { createComponentName } = require('../utils/tools')

const generateIconsVues = (framework, icons) =>
  new Promise((res, rej) => {
    const writeIndex = path.join(process.cwd(), 'packages/icons/vue', 'main.ts')
    icons.map((icon) => {
      const parsedName = createComponentName(icon.fileName)
      const importStatement = `import ${parsedName} from './${parsedName}/${parsedName}.vue';\n`
      const writeIndex = path.join(
        process.cwd(),
        'packages/icons/vue',
        'main.ts'
      )

      fs.appendFileSync(writeIndex, importStatement, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })
    })
    fs.appendFileSync(writeIndex, 'export {', 'utf8', (err) => {
      if (err) rej(err)
      res(true)
    })
    icons.map((icon) => {
      const parsedName = createComponentName(icon.fileName)
      // const exportStatement = `export {`;
      const writeIndex = path.join(
        process.cwd(),
        'packages/icons/vue',
        'main.ts'
      )

      fs.appendFileSync(writeIndex, `${parsedName}, `, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })
    })
    fs.appendFileSync(writeIndex, `}`, 'utf8', (err) => {
      if (err) rej(err)
      res(true)
    })
    icons.map((icon) => {
      const dataVue = vueIconsIndex(icon)
      const parsedName = createComponentName(icon.fileName)
      const writePath = path.join(
        process.cwd(),
        `${config.outputPaths[framework]}/${parsedName}`,
        `${parsedName}.vue`
      )

      const writePathIndex = path.join(
        process.cwd(),
        `${config.outputPaths[framework]}/${parsedName}`,
        'index.ts'
      )

      // Directory creation
      fs.mkdirSync(
        `${config.outputPaths[framework]}/${parsedName}`,
        { recursive: true },
        (err) => {
          if (err) rej(err)
          res(true)
        }
      )
      // Write individual Vue file
      fs.writeFile(writePath, dataVue, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })
    })
  })

module.exports = generateIconsVues
