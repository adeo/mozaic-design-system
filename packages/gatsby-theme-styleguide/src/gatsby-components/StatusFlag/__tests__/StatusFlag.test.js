import React from 'react'
import renderer from 'react-test-renderer'
import StatusFlag from '../StatusFlag'

// TODO: test status color
describe(`<StatusFlag>`, () => {
  it(`should render correctly with a wip status`, () => {
    const tree = renderer.create(<StatusFlag status="wip" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', 'solid 1px transparent')
  })

  it(`should render correctly with a bêta status`, () => {
    const tree = renderer.create(<StatusFlag status="bêta" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', 'solid 1px transparent')
  })

  it(`should render correctly with a stable status`, () => {
    const tree = renderer.create(<StatusFlag status="stable" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', 'solid 1px transparent')
  })

  it(`should should not render anything using an unsuported status prop`, () => {
    const tree = renderer.create(<StatusFlag status="foo" />).toJSON()
    expect(tree).toBe(null)
  })
})
