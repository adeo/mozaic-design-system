// Creates Component name from a string (usually the icon file name)
const createComponentName = str =>
  str
    .replace('px.svg', '')
    .replace(/-|_/g, '')
    .replace(str.split('_')[0], '')

// create rem based ison size based on a 16 px standard
const convertPxToRem = str => parseInt(str, 10) / 16 + 'rem'

module.exports = {
  createComponentName,
  convertPxToRem,
}
