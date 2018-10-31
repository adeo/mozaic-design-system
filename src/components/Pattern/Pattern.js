import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PatternFrame from './PatternFrame'

export class Pattern extends PureComponent {
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

    console.log(JSON.stringify(cleannedPattern, 0, 2))

    return cleannedPattern
  }

  cleanEmptyCode = pattern => {
    const cleanedCodes = {}

    const patternsCodes = Object.keys(pattern.node.codes)

    patternsCodes.map(lang => {
      if (
        pattern.node.codes[lang] !== '' &&
        pattern.node.codes[lang] !== null
      ) {
        cleanedCodes[lang] = pattern.node.codes[lang]
      }
    })

    console.log(JSON.stringify(cleanedCodes, 0, 2))

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
