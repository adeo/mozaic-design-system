const fs = require('fs')
const { reactIconsIndex } = require('./reactIcon')
const { vueIconsIndex } = require('./vueIcon')

const generateIconComponents = (icons, iconsOutputPath) => {
  const reactIndex = {
    data: reactIconsIndex(icons),
    writePath: iconsOutputPath.react + 'index.js',
  }

  const vueIndex = {
    data: vueIconsIndex(icons),
    writePath: iconsOutputPath.vue + 'index.vue',
  }

  const allFiles = [reactIndex, vueIndex]

  const saveFile = (outputFile, data) =>
    new Promise((res, rej) => {
      fs.writeFile(outputFile, data, 'utf8', err => {
        if (err) {
          return rej(err)
        }
        res(true)
      })
    })

  return Promise.all(allFiles.map(file => saveFile(file.writePath, file.data)))
}

module.exports = generateIconComponents
