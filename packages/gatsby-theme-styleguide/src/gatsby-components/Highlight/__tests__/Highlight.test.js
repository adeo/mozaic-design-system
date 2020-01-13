import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Highlight, { Theme } from '../Highlight'

describe(`<Highlight>`, () => {
  it(`should render with info theme if no theme is provided`, () => {
    const tree = renderer.create(<Highlight>Hello</Highlight>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`should display default info title if no title props is provided`, () => {
    const tree = shallow(<Highlight>Hello</Highlight>)
    expect(tree.find(Theme).text()).toBe('Information')
  })

  it(`should render with warning theme`, () => {
    const tree = renderer
      .create(<Highlight theme="warning">Hello</Highlight>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`should display warning title if warning theme props is provided`, () => {
    const tree = shallow(<Highlight theme="warning">Hello</Highlight>)
    expect(tree.find(Theme).text()).toBe('Warning')
  })

  it(`should render with info theme`, () => {
    const tree = renderer
      .create(<Highlight theme="info">Hello</Highlight>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`should display info title if info theme props is provided`, () => {
    const tree = shallow(<Highlight theme="info">Hello</Highlight>)
    expect(tree.find(Theme).text()).toBe('Information')
  })

  it(`should render with tips theme`, () => {
    const tree = renderer
      .create(<Highlight theme="tips">Hello</Highlight>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it(`should display default tips title if no props is provided`, () => {
    const tree = shallow(<Highlight theme="tips">Hello</Highlight>)
    expect(tree.find(Theme).text()).toBe('Useful tip')
  })

  it(`should overide title if title prop is provided`, () => {
    const tree = shallow(
      <Highlight theme="tips" title="title">
        Hello
      </Highlight>
    )
    expect(tree.find(Theme).text()).toBe('title')
  })
})
