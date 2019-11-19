const chromedriver = require('chromedriver')
const { remote } = require('webdriverio')

const previewsPath = require('../previewsPath')

describe('Mozaic Visual Testing', function() {
  previewsPath.forEach(async previewPath => {
    const componentName = previewPath.split('/').pop()
    it(`Previews for ${browser.capabilities.browserName}-${browser.config.capabilities.browser_version}-${browser.config.capabilities.resolution}`, async () => {
      const componentName = previewPath.split('/').pop()

      await browser.url(`${previewPath}.html`)

      await browser.pause(2000)

      await browser.saveScreenshot(
        `test/screenshots/${componentName}-${browser.capabilities.browserName}-${browser.config.capabilities.browser_version}-${browser.config.capabilities.resolution}.png`
      )
    })
  })
})
