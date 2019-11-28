import React from 'react'
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })
import { StaticQuery, query } from 'gatsby'

import PatternsStatus from '../PatternsStatus'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allMdx: {
        totalCount: 2,
        edges: [
          {
            node: {
              frontmatter: {
                title: 'Body styles',
                order: 4,
                status: {
                  sketch: 'bêta',
                  scss: 'bêta',
                },
              },
            },
          },
          {
            node: {
              frontmatter: {
                title: 'Border radius',
                order: 8,
                status: {
                  sketch: 'bêta',
                  scss: 'bêta',
                },
              },
            },
          },
        ],
      },
    })
  )
})

describe(`Pattern Status Component`, () => {
  test(`Check number of pattern present in the pattern status table`, () => {
    const location = { pathname: '/Components/Buttons/' }
    const patternStatus = Enzyme.mount(<PatternsStatus></PatternsStatus>)
    expect(patternStatus.find('tr').length).toBe(3) // 2 from mocks + title row
  })
})
