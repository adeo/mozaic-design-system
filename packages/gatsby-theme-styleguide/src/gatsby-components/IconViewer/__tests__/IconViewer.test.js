import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery, query } from 'gatsby'

import mock from './IconViewer.mock'
import IconViewer from '../IconViewer'

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) => render(mock))
})

describe('<IconViewer />', () => {
  it('render corectly monochrom icons', () => {
    const tree = renderer.create(<IconViewer type="monochrom" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('render corectly colors icon', () => {
    const tree = renderer.create(<IconViewer type="color" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
