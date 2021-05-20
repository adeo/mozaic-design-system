const fs = require("fs")
const path = require("path")
const reactIconsIndex = require("./reactIcon")
const svelteIconsIndex = require("./svelteIcon")
const vueIconsIndex = require("./vueIcon")
const config = require("../config")
const { createComponentName } = require("../utils/tools")

const transpilers = {
  react: {
    transpiler: reactIconsIndex,
    file: "index.js",
  },
  vue: {
    transpiler: vueIconsIndex,
    file: "index.vue",
  },
  svelte: {
    transpiler: svelteIconsIndex,
    file: "index.svelte",
  },
}

const generateIconComponent = (framework, icons) =>
  new Promise((res, rej) => {
    if (framework === "svelte") {
      icons.map((icon) => {
        const dataSvelte = transpilers[framework].transpiler(icon)
        const parsedName = createComponentName(icon.fileName)

        const writePath = path.join(
          process.cwd(),
          config.outputPaths[framework],
          `${parsedName}.svelte`
        )

        fs.writeFile(writePath, dataSvelte, "utf8", (err) => {
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

      fs.writeFile(writePath, data, "utf8", (err) => {
        if (err) rej(err)
        res(true)
      })
    }
  })

module.exports = generateIconComponent
