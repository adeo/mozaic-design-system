const config = require('./config.js')
const StyleDictionary = require('style-dictionary').extend(config)

module.exports = () => StyleDictionary.buildAllPlatforms()
