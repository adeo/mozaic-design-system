const path = require('path')
const currentDir = process.cwd()
const iconsCleaned = require('./svg-cleaner')
const generateIconComponents = require('./generateIconComponents')
const generateIconsData = require('./generateIconsData')

// output React components in @mozaic-ds/icons package
// const iconsComponentsOutput = path.join(currentDir, 'packages/icons/index.js')

// Generating Icons in gatsby-theme-styleguide
const iconsThemeGuideOutput = path.join(
  currentDir,
  'packages/gatsby-theme-styleguide/src/gatsby-components/IconsComponents/index.js'
)

iconsCleaned()
  .then(icons => {
    console.log('First item', icons[0])
    return generateIconComponents(icons, iconsThemeGuideOutput)
  })
  .then(ret => {
    console.log('COMPONENTS FILE GENERATED!!', ret)
    return generateIconsData()
  })
  .catch(err => {
    console.log('###################################')
    console.log('###################################')
    console.log('FINAL ERROR')
    console.log(err)
  })
