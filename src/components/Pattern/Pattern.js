import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PatternFrame from './PatternFrame'

export class Pattern extends PureComponent {
  constructor(props) {
    super(props)
  }

  pickPattern = data =>
    data.allPattern.edges.find(
      pattern => pattern.node.path === this.props.path
    ) || undefined

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allPattern {
              edges {
                node {
                  id
                  path
                  codes {
                    js
                    json
                    html
                    scss
                    css
                  }
                }
              }
            }
          }
        `}
        render={data => <PatternFrame data={this.pickPattern(data)} />}
      />
    )
  }
}

export default Pattern
