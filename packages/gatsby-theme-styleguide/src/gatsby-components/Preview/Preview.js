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
      grid: false,
      open: false,
      nude: this.props.nude,
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

  toggleOptions = () => {
    this.setState({
      nude: !this.state.nude,
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

  showGrid = () => {
    this.setState({
      grid: !this.state.grid,
    })
  }

  showMore = () => {
    this.setState({
      open: !this.state.open,
    })
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
            toggleOptions={this.toggleOptions}
            viewport={this.state.viewport}
            fullScreen={this.state.fullScreen}
            toggleFullScreen={this.toggleFullScreen}
            changeViewPort={this.changeViewPort}
            getAvailableWidth={this.getAvailableSpace}
            availableWidth={this.state.availableWidth}
            showGrid={this.showGrid}
            grid={this.state.grid}
            showMore={this.showMore}
            open={this.state.open}
            data={this.pickPreview(data)}
            nude={this.state.nude}
          />
        )}
      />
    )
  }
}

export default Preview
