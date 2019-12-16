import vueIcon from '../vueIcon'

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

describe('vueIcon', () => {
  it('vueIcon create a file with a list of exported icons', () => {
    expect(vueIcon(iconList)).toMatchSnapshot()
  })
})
