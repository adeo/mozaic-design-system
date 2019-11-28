import React from 'react'
import Code from '../Code'
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

test('Test code component', () => {
  const code = `@import 'settings-tools/_all-settings';`
  const component = Enzyme.mount(<Code children={code} />)
  expect(component.props().children).toBe(code)
})
