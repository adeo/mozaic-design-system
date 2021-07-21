import config from '../../config'
jest.mock('../../config', () => {
  return {
    sourcePaths: {
      svg: 'iconCompiler/svgCleaners/__tests__/testIcons',
    },
    outputPaths: {
      svg: 'toto',
    },
  }
})
const fs = require('fs')
import svgCleaner from '../index'
const { monochromOptim } = require('../optimizationConfigs')
fs.writeFile = jest.fn((a, b, c, d) => d())

describe('svgCleaner', () => {
  it('return a list of icons', () => {
    config.sourcePaths.svg = 'iconCompiler/svgCleaners/__tests__/testIcons'
    return svgCleaner('svg', monochromOptim).then((res) =>
      expect(res).toMatchSnapshot()
    )
  })

  it('return errors if the directory does not exist', () => {
    config.sourcePaths.svg = 'dontexist'
    return svgCleaner('svg', monochromOptim).catch((err) =>
      expect(err).toMatchSnapshot()
    )
  })

  it('return errors when the name of an icon is not valid', () => {
    config.sourcePaths.svg = 'iconCompiler/svgCleaners/__tests__/testIconsError'
    return svgCleaner('svg', monochromOptim).catch((err) =>
      expect(err).toMatchSnapshot()
    )
  })

  it('return errors when the name of an icon is not valid', () => {
    config.sourcePaths.svg =
      'iconCompiler/svgCleaners/__tests__/testIconsErrorSquareLayer'
    return svgCleaner('svg', monochromOptim).catch((err) =>
      expect(err).toMatchSnapshot()
    )
  })
})
