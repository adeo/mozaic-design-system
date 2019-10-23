const path = require('path')
const fs = require('fs')
var get = require('lodash.get')

const root = process.cwd()
const configPath = path.join(root, 'mozaic.config.js')
const config = fs.existsSync(configPath) ? require(configPath) : false

module.exports = {
  userConfigExist: () => (config ? true : false),
  getKey: key => (config ? get(config, key) : false),
}
