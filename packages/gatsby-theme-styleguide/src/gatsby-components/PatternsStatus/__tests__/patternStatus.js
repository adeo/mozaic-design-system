import React from 'react'
import renderer from 'react-test-renderer'

import { StaticQuery } from 'gatsby'
import PatternsStatus, { StatusTable } from '../PatternsStatus'
import mockBasic from './patternStatus.basic.mock'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(mockBasic))
})

describe(`Pattern Status Component`, () => {
  it(`render correctly`, () => {
    const tree = renderer.create(<PatternsStatus />)
    const treeJSON = tree.toJSON()
    expect(treeJSON).toMatchSnapshot()
    expect(tree.root.findAllByType(StatusTable).length).toEqual(2)
    expect(tree.root.findAllByType('h2').length).toEqual(2)
  })
})
