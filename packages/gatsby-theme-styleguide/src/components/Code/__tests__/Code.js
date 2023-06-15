import React from 'react'
import renderer from 'react-test-renderer'
import Code from '../Code'

test('<Code />', () => {
  const code = `@import 'settings-tools/_all-settings';`
  const tree = renderer.create(<Code children={code} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree.children[0].children[0].type).toBe('code')
})
