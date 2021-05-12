const fs = require("fs")
const path = require("path")
const jsonIconsIndex = require("./jsonIcon")
const config = require("../config")

const generateIconsJson = (icons) =>
  new Promise((res, rej) => {
    const data = jsonIconsIndex(icons)

    const writePath = path.join(
      process.cwd(),
      config.outputPaths.json,
      "icons.json"
    )

    fs.writeFile(writePath, data, "utf8", (err) => {
      if (err) rej(err)
      res(true)
    })
  })

module.exports = generateIconsJson
