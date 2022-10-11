const config = require('./config')
const cleanDirectories = require('./utils/cleanDirectories')
const cleanIcons = require('./svgCleaners')
const {
  monochromOptim,
  colorOptim,
} = require('./svgCleaners/optimizationConfigs')

const generateIconComponent = require('./componentsGenerators')
const generateIconsDatas = require('./generateData')
const copyPDF = require('./copyPDF')
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

    return Promise.all([
      cleanIcons('svg', monochromOptim),
      cleanIcons('svgColor', colorOptim),
      cleanIcons('svgColorToGatsby', colorOptim),
    ])
  })
  .then((icons) => {
    console.log(outputIconSetSize(icons[0], icons[1]))
    console.log('✓ SUCCESS : Icons cleaned and saved as SVGs in the package')
    const allIcons = icons[0].concat(icons[1])
    return Promise.all([
      generateIconComponent('react', allIcons),
      generateIconComponent('vue', icons[0]),
      generateIconComponent('svelte', allIcons),
      generateIconsModules(allIcons),
      generateIconsDatas(icons),
    ]).then(() => Promise.resolve())
  })
  .then(() => {
    console.log(
      '✓ SUCCESS : Monochrom icons compiled into react and vue components' +
        '\n✓ SUCCESS : JSON created to use in gatsby for previewing all icons'
    )

    return Promise.all([copyPDF('pdf'), copyPDF('pdfColor')])
  })
  .then(() => {
    console.log('✓ SUCCESS : PDF icons copied into packages')
  })
  .catch((err) => console.error(`✗ ERROR : ${err}`))
