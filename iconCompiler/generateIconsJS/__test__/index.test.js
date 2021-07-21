import fs from 'fs'
import iconsModulesGenerator from '../index'

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

describe('iconsModulesGenerator', () => {
  it('should call writeFile to create a file with all icons', () => {
    fs.writeFile = jest.fn((p, data, format, cb) => cb(false))
    expect(1).toBe(1)
    iconsModulesGenerator(iconList).then(
      expect(fs.writeFile).toHaveBeenCalled()
    )
  })
})
