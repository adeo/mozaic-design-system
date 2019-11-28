// Creates Component name from a string (usually the icon file name)
const createComponentName = str => str.replace('.svg', '').replace(/-|_/g, '')

// Creates Component name from a string (usually the icon file name)
const convertPxToRem = str => parseInt(str, 10) / 16 + 'rem'

module.exports = {
  createComponentName,
  convertPxToRem,
}
