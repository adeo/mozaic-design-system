const fs = require('fs-extra')
const chalk = require('chalk')

module.exports = {
  cssvariables_to_scss: {
    do: function (dictionary, config) {
      console.log('Create a file that assign CSS variables to SCSS variables')
      const scssFile = config.buildPath + '_variables.scss'

      try {
        const properties = dictionary.allProperties
        let content = ''

        properties.forEach((property) => {
          if (property.attributes.category !== 'color') return
          content += `$${property.name}: var(--${property.name}, ${property.value});\n`
        })

        fs.writeFileSync(scssFile, content)

        console.log(chalk.bold.green(`✔︎ ${scssFile}`))
      } catch (err) {
        console.error(err)
      }
    },
    undo: function (dictionary, config) {
      const dir = config.buildPath
      try {
        fs.rmdirSync(dir, { recursive: true })
        console.log(`${dir} is deleted!`)
      } catch (err) {
        console.error(`Error while deleting ${dir}.`)
      }
    },
  },
}
