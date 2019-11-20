//  cp -R static/icons/. packages/icons/svg compatible on windows
const path = require('path')
const cpFile = require('cp-file')
const glob = require('glob')

const { dirsIconsStatic } = require('./config')

// Source dir
const iconsSource = dirsIconsStatic[0]

// Destination dirS (In array: ready to more destinations)
const destinationDirs = [dirsIconsStatic[1]]

const copyIcons = () => {
  return new Promise((res, rej) => {
    glob(iconsSource + '/*', (err, files) => {
      if (err) {
        return rej(err)
      }

      const savingFiles = files.map(file => {
        const basename = path.basename(file)
        const arrayCopy = destinationDirs.map(dir =>
          cpFile(file, dir + basename)
        )
        return Promise.all(arrayCopy)
      })

      Promise.all(savingFiles)
        .then(ret => res(ret))
        .catch(err => rej(err))
    })
  })
}

copyIcons()
  .then(() => console.log('Icons copied to destination dirs!'))
  .catch(err => console.log('ERROR - copying icons to destination dirs!', err))
