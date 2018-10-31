import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PatternFrame from './PatternFrame'

class Pattern extends PureComponent {
  pickPattern = data => {
    const pattern =
      data.allPattern.edges.find(
        pattern => pattern.node.path === this.props.path
      ) || undefined

    const cleannedPattern = {
      node: {
        ...pattern.node,
        codes: this.cleanEmptyCode(pattern),
      },
    }
    return cleannedPattern
  }

  cleanEmptyCode = pattern => {
    const cleanedCodes = {}

    const patternsCodes = Object.keys(pattern.node.codes)

    patternsCodes.forEach(lang => {
      if (
        pattern.node.codes[lang] !== '' &&
        pattern.node.codes[lang] !== null
      ) {
        cleanedCodes[lang] = pattern.node.codes[lang]
      }
    })

    return cleanedCodes
  }

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
