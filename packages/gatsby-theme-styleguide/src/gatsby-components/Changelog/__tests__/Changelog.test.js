import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'

import Changelog, { ChangelogItem } from '../Changelog'

const data = {
  allGithubRelease: {
    edges: [
      {
        node: {
          descriptionHTML: '<div>v1.0.1-alpha.31</div>',
        },
      },
      {
        node: {
          descriptionHTML: '<div>v1.0.1-alpha.30</div>',
        },
      },
      {
        node: {
          descriptionHTML: '',
        },
      },
      {
        node: {
          descriptionHTML: '<div>v1.0.1-alpha.28</div>',
        },
      },
      {
        node: {
          descriptionHTML: '<div>v1.0.1-alpha.26</div>',
        },
      },
    ],
  },
}

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(data))
})

describe('<Changelog />', () => {
  it('render corectly', () => {
    const tree = renderer.create(<Changelog />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('do not render releases with empty descriptions', () => {
    const tree = renderer.create(<Changelog />)
    expect(tree.root.findAllByType(ChangelogItem).length).toEqual(4)
  })
})
