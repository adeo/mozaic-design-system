import fs from 'fs'
import componentsGenerators from '../index'

const iconList = [
  {
    data: `<svg></svg>`,
    fileName: 'Navigation_Arrow_Arrow--Top_16px.svg',
    outputPath: 'toto',
  },
  {
    data: `<svg></svg>`,
    fileName: 'Media_FullScreen_24px.svg',
    outputPath: 'toto',
  },
]

describe('componentsGenerators', () => {
  it('should call writeFile to create a file with all icons', () => {
    fs.writeFile = jest.fn((p, data, format, cb) => cb(false))

    componentsGenerators('vue', iconList).then(
      expect(fs.writeFile).toHaveBeenCalled()
    )
  })
})
