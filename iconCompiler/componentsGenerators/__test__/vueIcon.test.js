import vueIcon from '../vueIcon'

const iconList = [
  {
    data: `<svg viewBox="0 0 16 16"><path d="M42 7H6a2 2 0 00-2 2v27a2 2 0 002 2h10v3h-4.5a1.5 1.5 0 000 3h25a1.5 1.5 0 000-3H32v-3h10a2 2 0 002-2V9a2 2 0 00-2-2zm-1 3v18H7V10zM30 35H7v-5h34v5zm0 6H18v-3h12z"/></svg>`,
    fileName: 'Navigation_Arrow_Arrow--Top_16px.svg',
    outputPath: 'toto',
  },
  {
    data: `<svg viewBox="0 0 24 24"><path d="M42 7H6a2 2 0 00-2 2v27a2 2 0 002 2h10v3h-4.5a1.5 1.5 0 000 3h25a1.5 1.5 0 000-3H32v-3h10a2 2 0 002-2V9a2 2 0 00-2-2zm-1 3v18H7V10zM30 35H7v-5h34v5zm0 6H18v-3h12z"/></svg>`,
    fileName: 'Media_FullScreen_24px.svg',
    outputPath: 'toto',
  },
]

const failingIconList = [
  {
    data: `<svg><path d="M42 7H6a2 2 0 00-2 2v27a2 2 0 002 2h10v3h-4.5a1.5 1.5 0 000 3h25a1.5 1.5 0 000-3H32v-3h10a2 2 0 002-2V9a2 2 0 00-2-2zm-1 3v18H7V10zM30 35H7v-5h34v5zm0 6H18v-3h12z"/></svg>`,
    fileName: 'NoViewBox',
    outputPath: 'toto',
  },
  {
    data: `<svg viewBox="0 0 24 24"></svg>`,
    fileName: 'Media_FullScreen_24px.svg',
    outputPath: 'NoContent',
  },
]

describe('vueIcon', () => {
  let consoleSpy

  beforeEach(() => {
    if (typeof consoleSpy === 'function') {
      consoleSpy.mockRestore()
    }
  })

  it('vueIcon create a file with a list of exported icons', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()
    expect(vueIcon(iconList)).toMatchSnapshot()
    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it('return a console error and does not output icon when data is missing', () => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation()
    expect(vueIcon(failingIconList)).toMatchSnapshot()
    expect(consoleSpy).toHaveBeenCalledTimes(2)
  })
})
