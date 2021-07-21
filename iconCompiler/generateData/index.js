const config = require('../config')
const {
  generateMonochromListObject,
  generateColorListObject,
  checkPath,
  writeFile,
} = require('./lib')

const generateIconsData = (icons) =>
  new Promise((resolve, reject) => {
    let allIcons
    try {
      allIcons = {
        color: generateColorListObject(icons[1]),
        monochrom: generateMonochromListObject(icons[0]),
      }
    } catch (err) {
      reject(
        `generate icons data : the data received seems to be malformed\n${err}`
      )
    }

    checkPath(config.outputPaths.data)
      .then(() =>
        writeFile(
          `${config.outputPaths.data}/icons.json`,
          JSON.stringify(allIcons, 0, 2)
        )
      )
      .then(() => resolve())
      .catch((err) => reject(err))
  })

module.exports = generateIconsData
