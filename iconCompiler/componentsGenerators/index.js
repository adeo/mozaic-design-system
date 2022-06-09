const fs = require('fs')
const path = require('path')
const reactIconsIndex = require('./reactIcon')
const svelteIconsIndex = require('./svelteIcon')
const vueIconsIndex = require('./vueIcon')
const config = require('../config')
const { createComponentName } = require('../utils/tools')

const transpilers = {
  react: {
    transpiler: reactIconsIndex,
    file: 'index.js',
  },
  vue: {
    transpiler: vueIconsIndex,
    file: 'index.vue',
  },
  svelte: {
    transpiler: svelteIconsIndex,
    file: 'index.svelte',
  },
}

const declareWebRegistry = (parsedName, icon) => {
  const tag = icon.fileName.replace(/_/g, '-').replace('.svg', '').toLowerCase()
  return `if (!customElements.get('${tag}')) {
  customElements.define('${tag}', ${parsedName}.js);
}
`
}

const generateIconComponent = (framework, icons) =>
  new Promise((res, rej) => {
    if (framework === 'svelte') {
      // Generate import statement in index.js file
      icons.map((icon) => {
        const parsedName = createComponentName(icon.fileName)

        const importStatement = `import ${parsedName} from './icons/${parsedName}.js';\n`

        const writeIndex = path.join(
          process.cwd(),
          config.outputPaths[framework],
          'index.js'
        )

        fs.appendFile(writeIndex, importStatement, 'utf8', (err) => {
          if (err) rej(err)
          res(true)
        })
      })

      icons.map((icon) => {
        const dataSvelte = transpilers[framework].transpiler(icon)
        const parsedName = createComponentName(icon.fileName)
        const defineRegistry = declareWebRegistry(parsedName, icon)
        const writeIndex = path.join(
          process.cwd(),
          config.outputPaths[framework],
          'index.js'
        )
        const writePath = path.join(
          process.cwd(),
          config.outputPaths[framework],
          `${parsedName}.svelte`
        )
        // Write individual svele file
        fs.writeFile(writePath, dataSvelte, 'utf8', (err) => {
          if (err) rej(err)
          res(true)
        })
        // Define web compoennt in registry
        fs.appendFile(writeIndex, defineRegistry, 'utf8', (err) => {
          if (err) rej(err)
          res(true)
        })
      })
    } else {
      const data = transpilers[framework].transpiler(icons)
      const writePath = path.join(
        process.cwd(),
        config.outputPaths[framework],
        transpilers[framework].file
      )

      fs.writeFile(writePath, data, 'utf8', (err) => {
        if (err) rej(err)
        res(true)
      })
      if (framework === 'react') {
        const data = "declare module '@mozaic-ds/icons/react'"

        const writeTypeScriptFile = path.join(
          process.cwd(),
          config.outputPaths[framework],
          'index.d.ts'
        )
        fs.writeFile(writeTypeScriptFile, data, 'utf8', (err) => {
          if (err) rej(err)
          res(true)
        })
      }
    }
  })

module.exports = generateIconComponent
