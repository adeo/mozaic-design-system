import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PatternComponent from './PatternComponent'

class Pattern extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      viewport: 'auto',
      fullScreen: false,
      availableWidth: null,
    }
  }

  pickPattern = data => {
    const pattern = data.allPattern.edges.find(item => {
      return item.node.path === this.props.path
    })

    const cleannedPattern = {
      node: {
        ...pattern.node,
        codes: this.cleanEmptyCode(pattern),
      },
    }
    return cleannedPattern
  }

  getAvailableSpace = width => {
    this.setState({ availableWidth: width })
  }

  changeViewPort = viewport => {
    this.setState({
      viewport,
    })
  }

  toggleFullScreen = () => {
    this.setState(
      {
        fullScreen: !this.state.fullScreen,
      },
      this.getAvailableSpace
    )
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
                    html
                    scss
                    css
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <PatternComponent
            viewport={this.state.viewport}
            fullScreen={this.state.fullScreen}
            toggleFullScreen={this.toggleFullScreen}
            changeViewPort={this.changeViewPort}
            getAvailableWidth={this.getAvailableSpace}
            availableWidth={this.state.availableWidth}
            data={this.pickPattern(data)}
          />
        )}
      />
    )
  }
}

export default Pattern
