import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import IconTile, { SizeItemBtn } from '../IconTile'

const ColorProps = {
  type: 'color',
  name: 'StoreLocation--Colors',
  icons: {
    '16px': null,
    '24px': null,
    '32px': null,
    '48px': {
      cat: 'Store',
      fileName: 'Store_StoreLocation--Colors_48px.svg',
      name: 'StoreLocation--Colors',
      size: '48px',
    },
    '64px': {
      cat: 'Store',
      fileName: 'Store_StoreLocation--Colors_64px.svg',
      name: 'StoreLocation--Colors',
      size: '64px',
    },
  },
}

const ColorPropsNo48 = {
  type: 'color',
  name: 'StoreLocation--Colors',
  icons: {
    '16px': null,
    '24px': null,
    '32px': {
      cat: 'Store',
      fileName: 'Store_StoreLocation--Colors_48px.svg',
      name: 'StoreLocation--Colors',
      size: '48px',
    },
    '48px': null,
    '64px': {
      cat: 'Store',
      fileName: 'Store_StoreLocation--Colors_64px.svg',
      name: 'StoreLocation--Colors',
      size: '64px',
    },
  },
}

const monochromProps = {
  type: 'monochrom',
  name: 'Mobile',
  icons: {
    '16px': null,
    '24px': null,
    '32px': null,
    '48px': {
      cat: 'Device',
      componentName: 'Mobile48',
      fileName: 'Device_Mobile_48px.svg',
      name: 'Mobile',
      size: '48px',
    },
    '64px': null,
  },
}

describe('<IconTile />', () => {
  it('render corectly icon colors', () => {
    const tree = renderer.create(<IconTile {...ColorProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render corectly monochrom icon', () => {
    const tree = renderer.create(<IconTile {...monochromProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('change the icon when you click on another size', () => {
    const Tile = mount(<IconTile {...ColorProps} />)
    expect(Tile.find(SizeItemBtn).length).toBe(2)
    Tile.find(SizeItemBtn).at(1).simulate('click')
    expect(Tile.state().currentSize).toBe('64px')
  })

  it('display another size when default size (48px) is not available', () => {
    const Tile = mount(<IconTile {...ColorPropsNo48} />)
    expect(Tile.state().currentSize).toBe('32px')
  })
})
