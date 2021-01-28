import { checkPlatform, checkStatus } from '../status'

describe(`checkPlatform utils`, () => {
  it(`should return false if the platform is not supported`, () => {
    expect(checkPlatform('foo')).toEqual(false)
  })
  it(`should return the same value if the platform is supported`, () => {
    expect(checkPlatform('sketch')).toEqual('sketch')
    expect(checkPlatform('figma')).toEqual('figma')
    expect(checkPlatform('scss')).toEqual('scss')
  })

  it(`should return the lowercase value if the platform is supported but case is invalid`, () => {
    expect(checkPlatform('SKetCh')).toEqual('sketch')
    expect(checkPlatform('FigMA')).toEqual('figma')
    expect(checkPlatform('SCSS')).toEqual('scss')
  })
})

describe(`checkStatus utils`, () => {
  it(`should return false if the Status is not supported`, () => {
    expect(checkStatus('foo')).toEqual(false)
  })
  it(`should return the same value if the Status is supported`, () => {
    expect(checkStatus('wip')).toEqual('wip')
    expect(checkStatus('bêta')).toEqual('bêta')
    expect(checkStatus('stable')).toEqual('stable')
  })

  it(`should return the lowercase value if the Status is supported but case is invalid`, () => {
    expect(checkStatus('WIP')).toEqual('wip')
    expect(checkStatus('Bêta')).toEqual('bêta')
    expect(checkStatus('Stable')).toEqual('stable')
  })
})
