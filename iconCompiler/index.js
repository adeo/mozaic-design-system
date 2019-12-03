const path = require('path')
const currentDir = process.cwd()
const iconsCleaned = require('./svg-cleaner')
const generateIconComponents = require('./generateIconComponents')
const generateIconsData = require('./generateIconsData')

// Generating React and vue Components file for Icons Package
const iconsPackageReactOutput = path.join(currentDir, './packages/icons/react/')
const iconsPackageVueOutput = path.join(currentDir, './packages/icons/vue/')

iconsCleaned()
  .then(icons =>
    generateIconComponents(icons, {
      react: iconsPackageReactOutput,
      vue: iconsPackageVueOutput,
    })
  )
  .then(() => generateIconsData())
  .catch(err => {
    console.error('Error in Icons building!', err)
  })
