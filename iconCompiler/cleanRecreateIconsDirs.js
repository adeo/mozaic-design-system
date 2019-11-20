const fs = require('fs')
const rimraf = require('rimraf') // "rm -rf like" command, all OSes compatible
const { dirsIconsStatic } = require('./config')

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
  dirsIconsStatic.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  })
  return true
}

const cleanRecreateIconsDirs = () => {
  const cleaningArray = dirsIconsStatic.map(dir => promiseRimRaf(dir))
  return Promise.all(cleaningArray).then(() => recreateIconsDirs())
}

module.exports = cleanRecreateIconsDirs
