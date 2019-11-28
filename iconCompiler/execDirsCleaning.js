// Just to exec the "cleanIconsDirs"
// to be called from package.json
const cleanRecreateIconsDirs = require('./cleanRecreateIconsDirs')

cleanRecreateIconsDirs()
  .then(() => console.log('Icons directories cleaned and recreated!!'))
  .catch(err => console.log('ERROR cleaning Icons Directories'))
