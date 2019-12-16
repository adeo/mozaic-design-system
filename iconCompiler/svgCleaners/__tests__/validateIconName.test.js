import validateIconName from '../validateIconName'

describe('validateIconName', () => {
  it('return null when valid', () => {
    const result = validateIconName('Social_View_Star--Half_32px.svg', '32px')

    expect(result).toBe(null)
  })

  it('return an error when the directory size name does not match the icon size', () => {
    const result = validateIconName('Social_View_Star--Half_32px.svg', '16px')

    expect(result).toBe(
      'in Social_View_Star--Half_32px.svg :  found in /16px/ directory. Icon file name is either wrong or the icon is in the wrong directory'
    )
  })

  it('should return an error when there is spaces in the icon name', () => {
    const result = validateIconName('Social_View_ Star--Half_32px.svg', '32px')

    expect(result).toBe(
      'in Social_View_ Star--Half_32px.svg : icon file name should not contain spaces'
    )
  })

  it('should return an error when the icon name does not end with [size]px.svg', () => {
    const result = validateIconName(
      'Social_View_Star--Half_32pxfoo.svg',
      '32px'
    )

    expect(result).toBe(
      'in Social_View_Star--Half_32pxfoo.svg : icon file name should always end with _[size]px.svg\n✗ ERROR : in Social_View_Star--Half_32pxfoo.svg :  found in /32px/ directory. Icon file name is either wrong or the icon is in the wrong directory'
    )
  })

  it('should return an error if there is no category name', () => {
    const result = validateIconName('ViewStarHalf_32px.svg', '32px')

    expect(result).toBe(
      'in ViewStarHalf_32px.svg : icon file name should start with a category name separated by _ and the first letter following the category name should be a capital letter'
    )
  })

  it('should return an error if the first letter after the category name is not a capitalized letter', () => {
    const result = validateIconName('View_starHalf_32px.svg', '32px')

    expect(result).toBe(
      'in View_starHalf_32px.svg : icon file name should start with a category name separated by _ and the first letter following the category name should be a capital letter'
    )

    const result2 = validateIconName('View_999_32px.svg', '32px')

    expect(result2).toBe(
      'in View_999_32px.svg : icon file name should start with a category name separated by _ and the first letter following the category name should be a capital letter'
    )
  })
})
