import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PreviewComponent from './PreviewComponent'

class Preview extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      viewport: 'auto',
      fullScreen: false,
      grid: false,
      open: false,
      nude: this.props.nude,
    }
  }

  getPreviewPath = () => {
    // src/docs/Components/Buttons/previews/button-styles
    const basePath = 'src/docs'
    const { location, path } = this.props
    // we need only pieces of path
    let locationParsed = location.pathname.replace(/^\/|\/$/g, '').split('/')

    locationParsed = locationParsed.filter((elem) => /^[A-Z]/.test(elem))
    return `${basePath}/${locationParsed.join('/')}/previews/${path}`
  }

  pickPreview = (data) => {
    const previewPath = this.getPreviewPath()
    const preview = data.allPreview.edges.find(
      (item) => item.node.path === previewPath
    )

    if (!preview) {
      console.log(
        'preview not found : ' + previewPath,
        this.props.location.pathname
      )

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
        previewPath,
        codes: this.cleanEmptyCode(preview),
      },
    }
  }

  getAvailableSpace = (width) => {
    this.setState({ availableWidth: width })
  }

  changeViewPort = (viewport) => {
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

  cleanEmptyCode = (preview) => {
    const cleanedCodes = {}
    const previewsCodes = Object.keys(preview.node.codes)

    previewsCodes.forEach((lang) => {
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
        render={(data) => (
          <PreviewComponent
            toggleOptions={this.toggleOptions}
            viewport={this.state.viewport}
            fullScreen={this.state.fullScreen}
            toggleFullScreen={this.toggleFullScreen}
            changeViewPort={this.changeViewPort}
            getAvailableWidth={this.getAvailableSpace}
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
