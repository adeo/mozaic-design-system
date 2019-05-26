import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PreviewComponent from './PreviewComponent'

class Preview extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      viewport: 'auto',
      fullScreen: false,
      availableWidth: null,
    }
  }

  pickPreview = data => {
    const preview = data.allPreview.edges.find(
      item => item.node.path === this.props.path
    )

    if (!preview) {
      console.log('preview not found : ' + this.props.path)

      return {
        node: {
          codes: {
            html: 'not found',
            css: 'body { color: red }',
            scss: '/* not found */',
          },
        },
      }
    }

    return {
      node: {
        ...preview.node,
        codes: this.cleanEmptyCode(preview),
      },
    }
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

  cleanEmptyCode = preview => {
    const cleanedCodes = {}

    const previewsCodes = Object.keys(preview.node.codes)

    previewsCodes.forEach(lang => {
      if (
        preview.node.codes[lang] !== '' &&
        preview.node.codes[lang] !== null
      ) {
        cleanedCodes[lang] = preview.node.codes[lang]
      }
    })

    return cleanedCodes
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allPreview {
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
          <PreviewComponent
            viewport={this.state.viewport}
            fullScreen={this.state.fullScreen}
            toggleFullScreen={this.toggleFullScreen}
            changeViewPort={this.changeViewPort}
            getAvailableWidth={this.getAvailableSpace}
            availableWidth={this.state.availableWidth}
            data={this.pickPreview(data)}
          />
        )}
      />
    )
  }
}

export default Preview
