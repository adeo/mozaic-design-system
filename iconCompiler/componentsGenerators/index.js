const fs = require('fs')
const path = require('path')
const reactIconsIndex = require('./reactIcon')
const vueIconsIndex = require('./vueIcon')
const config = require('../config')

const transpilers = {
  react: {
    transpiler: reactIconsIndex,
    file: 'index.js',
  },
  vue: {
    transpiler: vueIconsIndex,
    file: 'index.vue',
  },
}

const generateIconComponent = (framework, icons) =>
  new Promise((res, rej) => {
    const data = transpilers[framework].transpiler(
      icons,
      transpilers[framework].color
    )

    const writePath = path.join(
      process.cwd(),
      config.outputPaths[framework],
      transpilers[framework].file
    )

    fs.writeFile(writePath, data, 'utf8', err => {
      if (err) rej(err)
      res(true)
    })
  })

module.exports = generateIconComponent
