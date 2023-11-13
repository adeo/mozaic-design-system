const config = require('./config')
const cleanDirectories = require('./utils/cleanDirectories')
const cleanIcons = require('./svgCleaners')
const { monochromOptim } = require('./svgCleaners/optimizationConfigs')

const generateIconComponent = require('./componentsGenerators')
const generateIconsDatas = require('./generateData')
const generateIconsModules = require('./generateIconsJS')

const outputIconSetSize = (monochromSet, colorSet) => `
---------------------------------------
MONOCHROM ICONS : ${monochromSet.length}
COLOR ICONS : ${colorSet.length}
---------------------------------------
`

console.log(`
•••••••••••••••••••••••••••••••••••••••
+                                     +
+      COMPILING MOZAIC ICON SET      +
+                                     +
•••••••••••••••••••••••••••••••••••••••
`)

cleanDirectories(config)
  .then(() => {
    console.log('✓ SUCCESS : Icons Directories cleaned and recreated')

    return Promise.all([cleanIcons('svg', monochromOptim)])
  })
  .then((icons) => {
    console.log('✓ SUCCESS : Icons cleaned and saved as SVGs in the package')
    return Promise.all([
      generateIconComponent('react', icons[0]),
      generateIconComponent('vue', icons[0]),
      generateIconComponent('svelte', icons[0]),
      generateIconsModules(icons[0]),
      generateIconsDatas(icons[0]),
    ]).then(() => Promise.resolve())
  })
  .then(() => {
    console.log(
      '✓ SUCCESS : Monochrom icons compiled into react and vue components' +
        '\n✓ SUCCESS : JSON created to use in gatsby for previewing all icons'
    )
  })
  .then(() => {
    console.log('✓ SUCCESS : PDF icons copied into packages')
  })
  .catch((err) => console.error(`✗ ERROR : ${err}`))
