const fs = require('fs')
const rimraf = require('rimraf') // "rm -rf like" command, all OSes compatible

// Promise based rimraf
const promiseRimRaf = globDir =>
  new Promise((resolve, reject) => {
    rimraf(globDir, err => {
      if (err) reject(err)
      resolve(true)
    })
  })

const recreateIconsDirs = outputPaths => {
  Object.keys(outputPaths).forEach(dir => {
    if (!fs.existsSync(outputPaths[dir])) {
      fs.mkdirSync(outputPaths[dir], { recursive: true })
    }
  })
  return true
}

const cleanRecreateIconsDirs = ({ outputPaths }) => {
  const cleaningArray = Object.keys(outputPaths).map(dir =>
    promiseRimRaf(outputPaths[dir])
  )
  return Promise.all(cleaningArray).then(() => recreateIconsDirs(outputPaths))
}

module.exports = cleanRecreateIconsDirs
