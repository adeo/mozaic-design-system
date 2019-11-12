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
        'goog:chromeOptions': {},
      },
    }
    browser = await remote(chrome)
  })

  after(async function() {
    chromedriver.stop()
  })

  previewsPath.forEach(async previewPath => {
    it(`creates a screenshot for ${previewPath.split('/').pop()}`, async () => {
      await browser.url(`http://localhost:8000/${previewPath}`)

      const eyes = new Eyes(new VisualGridRunner(3))
      eyes.setBatch(new BatchInfo(`${previewPath.split('/').pop()}`))

      const configuration = new Configuration()
      configuration.setTestName(`${previewPath.split('/').pop()}`)
      configuration.setAppName('MozaicGridVisualisation')
      configuration.addBrowser(800, 600, BrowserType.CHROME)
      configuration.addBrowser(1000, 800, BrowserType.FIREFOX)
      configuration.addBrowser(500, 320, BrowserType.IE_11)

      eyes.setConfiguration(configuration)

      await eyes.open(browser)

      await eyes.check(`${previewPath.split('/').pop()}`, Target.window())

      await eyes.getRunner().getAllTestResults(false)

      await browser.deleteSession()
    })
  })
})
