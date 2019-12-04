import React from 'react'
import renderer from 'react-test-renderer'
import Color from '../Color'

test('<Color />', () => {
  const tree = renderer.create(<Color color="blue" />).toJSON()
  expect(tree).toMatchSnapshot()
})
