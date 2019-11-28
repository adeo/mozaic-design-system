import React from 'react'
import Color from '../Color'
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

test('Test color component', () => {
  const component = Enzyme.mount(<Color color="blue" />)
  expect(component.props().color).toBe('blue')
})
