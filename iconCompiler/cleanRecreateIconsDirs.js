const fs = require('fs')
const rimraf = require('rimraf') // "rm -rf like" command, all OSes compatible
const { iconsOutputPath } = require('./config')

// Promise based rimraf
const promiseRimRaf = globDir => {
  return new Promise((res, rej) => {
    rimraf(globDir, err => {
      if (err) {
        return rej(err)
      }
      res(true)
    })
  })
}

const recreateIconsDirs = () => {
  Object.keys(iconsOutputPath).forEach(dir => {
    if (!fs.existsSync(iconsOutputPath[dir])) {
      fs.mkdirSync(iconsOutputPath[dir], { recursive: true })
    }
  })
  return true
}

const cleanRecreateIconsDirs = () => {
  const cleaningArray = Object.keys(iconsOutputPath).map(dir =>
    promiseRimRaf(iconsOutputPath[dir])
  )
  return Promise.all(cleaningArray).then(() => recreateIconsDirs())
}

module.exports = cleanRecreateIconsDirs
