const fs = require('fs-extra')
const chalk = require('chalk')

module.exports = {
  cssvariables_to_scss: {
    do: function (dictionary, config) {
      console.log('Create a file that assign CSS variables to SCSS variables')
      const cssFile = config.buildPath + 'variables.css'
      const scssFile = config.buildPath + '_variables.scss'

      try {
        if (fs.existsSync(cssFile)) {
          const properties = dictionary.allProperties
          let content = ''

          properties.forEach(function (property) {
            content += `$${property.name}: var(--${property.name});\n`
          })

          fs.writeFileSync(scssFile, content)
          console.log(chalk.bold.green(`✔︎ ${scssFile}`))
        }
      } catch (err) {
        console.error(err)
      }
    },
    undo: function (dictionary, config) {
      // console.log('Cleaning cssvariables_to_scss action')
      const scssFile = config.buildPath + '_variables.scss'
      fs.unlinkSync(scssFile)
    },
  },
}
