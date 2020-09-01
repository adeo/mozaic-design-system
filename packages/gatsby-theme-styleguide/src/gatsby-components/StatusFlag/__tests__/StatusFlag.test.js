import React from 'react'
import renderer from 'react-test-renderer'
import StatusFlag from '../StatusFlag'

describe(`<StatusFlag>`, () => {
  it(`should render correctly with a wip status`, () => {
    const tree = renderer.create(<StatusFlag status="wip" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', '#c86f21')
  })

  it(`should render correctly with a bêta status`, () => {
    const tree = renderer.create(<StatusFlag status="bêta" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', '#b42a27')
  })

  it(`should render correctly with a stable status`, () => {
    const tree = renderer.create(<StatusFlag status="stable" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', '#41a017')
  })

  it(`should should not render anything using an unsuported status prop`, () => {
    const tree = renderer.create(<StatusFlag status="foo" />).toJSON()
    expect(tree).toBe(null)
  })

  it(`should should not render anything no or empty status prop`, () => {
    const tree = renderer.create(<StatusFlag status="" />).toJSON()
    expect(tree).toBe(null)
  })
})
