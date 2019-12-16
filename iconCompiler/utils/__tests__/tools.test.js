import { createComponentName, convertPxToRem } from '../tools'

describe('createComponentName', () => {
  it('remove the Category name', () => {
    expect(createComponentName('Social_Foo')).toBe('Foo')
  })
  it('keep the px value at the end', () => {
    expect(createComponentName('Social_Foo_16px')).toBe('Foo16px')
  })
  it('Remove all _ and - from the name', () => {
    expect(createComponentName('foo_bar-baz_biz_16px')).toBe('barbazbiz16px')
  })
})

describe('convertPxToRem', () => {
  it('remove the Category name', () => {
    expect(convertPxToRem('16px')).toBe('1rem')
  })
})
