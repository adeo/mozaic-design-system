import React from 'react'
import renderer from 'react-test-renderer'

import PatternStatusGroup from '../PatternStatusGroup'
import StatusFlag from '../../StatusFlag'

describe(`<PatternStatusGroup />`, () => {
  it(`render correctly`, () => {
    const tree = renderer.create(
      <PatternStatusGroup
        status={{ scss: 'stable', figma: 'wip', sketch: 'bêta' }}
      />
    )
    const treeJSON = tree.toJSON()
    expect(treeJSON).toMatchSnapshot()
    expect(tree.root.findAllByType(StatusFlag).length).toEqual(3)
  })

  it(`does not render anything if no status prop is provided`, () => {
    const tree = renderer.create(<PatternStatusGroup />)
    const treeJSON = tree.toJSON()
    expect(treeJSON).toBe(null)
  })

  it(`does not render anything if empty or invalid status prop is provided`, () => {
    const tree = renderer.create(<PatternStatusGroup status={{ foo: 'bar' }} />)
    const treeJSON = tree.toJSON()
    expect(treeJSON).toBe(null)
  })
})
