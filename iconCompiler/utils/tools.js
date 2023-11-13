// Creates Component name from a string (usually the icon file name)
const createComponentName = (str) => {
  str = str.replace('.svg', '').replace(/_/g, '').replace(str.split('_')[0], '')
  return (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('')
}

// create rem based ison size based on a 16 px standard
const convertPxToRem = (str) => parseInt(str, 10) / 16 + 'rem'

module.exports = {
  createComponentName,
  convertPxToRem,
}
