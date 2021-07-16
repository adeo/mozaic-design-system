import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import MenuVersionSelect from '../MenuVersionSelect'

const props = {
  githubReleases: [
    {
      node: { url: 'http://1', tagName: '1', isCurrent: false },
    },
    {
      node: { url: 'http://2', tagName: '2', isCurrent: true },
    },
  ],
}

describe('<MenuVersionSelect />', () => {
  beforeEach(function () {
    global.window = Object.create(window)
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://dummy.com',
      },
      writable: true,
    })
  })

  it('render corectly', () => {
    const tree = renderer.create(<MenuVersionSelect {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('changes the url when we change the select option', () => {
    const wrapper = mount(<MenuVersionSelect {...props} />)
    wrapper.find('select').simulate('change', { target: { value: 'http://2' } })
    expect(window.location.href).toEqual('http://2')
  })

  it('does not change anything if we change select to default value', () => {
    const wrapper = mount(<MenuVersionSelect {...props} />)
    wrapper.find('select').simulate('change', { target: { value: 'default' } })
    expect(window.location.href).toEqual('http://dummy.com')
  })
})
