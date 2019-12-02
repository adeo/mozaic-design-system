import React from 'react'
import renderer from 'react-test-renderer'
import StatusFlag from '../StatusFlag'
import 'jest-styled-components'

describe(`<StatusFlag>`, () => {
  it(`should render correctly with a wip status`, () => {
    const tree = renderer.create(<StatusFlag status="wip" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', 'solid 1px #e3cb58')
  })

  it(`should render correctly with a bêta status`, () => {
    const tree = renderer.create(<StatusFlag status="bêta" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', 'solid 1px #e35876')
  })

  it(`should render correctly with a stable status`, () => {
    const tree = renderer.create(<StatusFlag status="stable" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', 'solid 1px #58e3b7')
  })

  it(`should should not render anything using an unsuported status prop`, () => {
    const tree = renderer.create(<StatusFlag status="foo" />).toJSON()
    expect(tree).toBe(null)
  })
})
