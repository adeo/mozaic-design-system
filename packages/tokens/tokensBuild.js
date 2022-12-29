const StyleDictionary = require('style-dictionary')
const getConfig = require('./config.js')
const brands = [
  {
    brand: 'lm',
    tokens: 'src/tokens/leroymerlin/**/*.json',
  },
  {
    brand: 'adeo',
    tokens: 'src/tokens/adeo/**/*.json',
  },
  {
    brand: 'bricoman',
    tokens: 'src/tokens/bricoman/**/*.json',
  },
]

module.exports = () => {
  brands.forEach((brand) => {
    const brandConfig = getConfig(brand)

    StyleDictionary.extend(brandConfig).buildAllPlatforms()
  })
}
