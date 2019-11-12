const chromedriver = require('chromedriver')
const { remote } = require('webdriverio')
const {
  By,
  Eyes,
  Target,
  VisualGridRunner,
  Configuration,
  BrowserType,
  DeviceName,
  ScreenOrientation,
  BatchInfo,
} = require('@applitools/eyes-webdriverio')

const previewsPath = require('../previewsPath')

let browser

describe('Mozaic Visual Testing With Grid', function() {
  this.timeout(5 * 60 * 1000)

  before(async function() {
    chromedriver.start()
  })

  beforeEach(async function() {
    const chrome = {
      capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless'],
        },
      },
    }
    browser = await remote(chrome)
  })

  after(async function() {
    chromedriver.stop()
  })

  previewsPath.forEach(async previewPath => {
    const componentName = previewPath.split('/').pop()
    it(`creates a screenshot for ${componentName}`, async () => {
      await browser.url(`/${previewPath}`)

      const eyes = new Eyes(new VisualGridRunner(3))
      eyes.setBatch(new BatchInfo(`${componentName}`))

      const configuration = new Configuration()
      configuration.setTestName(`${componentName}`)
      configuration.setAppName('MozaicGridVisualisation')
      configuration.addBrowser(800, 600, BrowserType.CHROME)
      configuration.addBrowser(1000, 800, BrowserType.FIREFOX)
      configuration.addBrowser(500, 320, BrowserType.IE_11)

      eyes.setConfiguration(configuration)

      await eyes.open(browser)

      await eyes.check(`${componentName}`, Target.window())

      await eyes.getRunner().getAllTestResults(false)

      await browser.deleteSession()
    })
  })
})
