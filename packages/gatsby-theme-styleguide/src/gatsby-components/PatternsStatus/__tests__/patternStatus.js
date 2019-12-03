import React from 'react'
import renderer from 'react-test-renderer'

import { StaticQuery } from 'gatsby'
import PatternsStatus, { StatusTable } from '../PatternsStatus'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      Foundations: {
        totalCount: 2,
        edges: [
          {
            node: {
              fields: {
                slug: '/Foundations/Typography/BodyStyles/',
              },
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
              fields: {
                slug: '/Foundations/BorderRadius/',
              },
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
      Components: {
        totalCount: 2,
        edges: [
          {
            node: {
              fields: {
                slug: '/Components/Typography/BodyStyles/',
              },
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
              fields: {
                slug: '/Components/Typography/BodyStyles/',
              },
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
  it(`render correctly`, () => {
    const tree = renderer.create(<PatternsStatus />)
    const treeJSON = tree.toJSON()
    expect(treeJSON).toMatchSnapshot()
    expect(tree.root.findAllByType(StatusTable).length).toEqual(2)
    expect(tree.root.findAllByType('h2').length).toEqual(2)
  })
})
