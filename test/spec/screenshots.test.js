require('dotenv').config()
const chromedriver = require('chromedriver')
const { remote } = require('webdriverio')
const { ClassicRunner, Eyes, Target } = require('@applitools/eyes-webdriverio')
const { Configuration } = require('@applitools/eyes-selenium')
const previewsPath = require('./../previewsPath')

const runner = new ClassicRunner()
let eyes = new Eyes(runner)
const configuration = new Configuration()

configuration.setAppName('Mozaic')
configuration.setApiKey(process.env.APPLITOOLS_API_KEY)
configuration.setTestName('Visual Testing')
eyes.setConfiguration(configuration)
try {
  previewsPath.forEach(previewPath => {
    it(`creates a screenshot for ${previewPath.split('/').pop()}`, async () => {
      await eyes.open(browser)

      await browser.url(`/${previewPath}`)

      await eyes.check(`${previewPath.split('/').pop()}`, Target.window())

      await eyes.closeAsync()
    })
  })
} finally {
  eyes.abortIfNotClosed()
}
