import { monochromOptim, colorOptim } from '../optimizationConfigs'
import icon from './optimizationConfigs.mock'

describe('monochromOptim', () => {
  it('should match custom config', () => {
    expect(monochromOptim.custom(icon)).toMatchSnapshot()
  })
})

describe('colorOptim', () => {
  it('should match custom config', () => {
    expect(colorOptim.custom(icon)).toMatchSnapshot()
  })
})
