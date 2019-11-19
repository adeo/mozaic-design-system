// Creates Component name from a string (usually the icon file name)
const createComponentName = str => {
  return str.replace('.svg', '').replace('--', '__')
}

module.exports = {
  createComponentName,
}
