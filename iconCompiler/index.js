const path = require('path')
const currentDir = process.cwd()
const iconsCleaned = require('./svg-cleaner')
const generateIconComponents = require('./generateIconComponents')
const generateIconsData = require('./generateIconsData')

// Generating Icons in gatsby-theme-styleguide
const iconsThemeGuideOutput = path.join(
  currentDir,
  'packages/gatsby-theme-styleguide/src/gatsby-components/IconsComponents/index.js'
)

iconsCleaned()
  .then(icons => {
    return generateIconComponents(icons, iconsThemeGuideOutput)
  })
  .then(ret => {
    return generateIconsData()
  })
  .catch(err => {
    console.log('###################################')
    console.log('Error in Icons building!', err)
  })
