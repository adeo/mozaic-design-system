import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

import PreviewCodeSample from './PreviewCodeSample'
import PreviewToolBar from './PreviewToolBar'
import PreviewFrame from './PreviewFrame'

import tokensObject from '@mozaic-ds/tokens/build/js/tokensObject.js'

import copyToClipboard from '../../utils/copy-to-clipboard'

let viewPorts = {}

Object.keys(tokensObject.screen).map(
  (screenName) =>
    (viewPorts[screenName] = Number(
      tokensObject.screen[screenName].value.replace('px', '')
    ))
)

const PreviewContainer = styled.div`
  ${({ fullScreen }) =>
    fullScreen
      ? css`
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: white;
          z-index: 2;
        `
      : css`
          position: relative;
        `};
`
const Container = styled.div`
  display: flex;
  height: 100%;
`
const Left = styled.div`
  flex: 0 0 70%;
  max-width: 70%;
  display: flex;
  flex-flow: column nowrap;
  background: #f5f5f5;
`
const Right = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  min-width: 30%;
  display: flex;
  flex-flow: column nowrap;
`

const Body = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export class PreviewComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.availableWidth = null
    this.contRef = React.createRef()
    this.body = React.createRef()
    this.state = {
      currentCodeSample: 'html',
      copyCompatible: false,
      copied: false,
      location: '',
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ location: window.location })
    }
  }

  componentDidUpdate() {
    if (this.props.fullScreen) {
      this.setState({ availableWidth: this.body.clientWidth })
    } else {
      this.setState({ availableWidth: this.contRef.current.clientWidth })
    }
  }

  getLanguage = (ext) =>
    ({
      js: 'javascript',
      json: 'JSON',
      html: 'html',
      css: 'css',
      scss: 'scss',
    }[ext])

  showCode = (codeSampleName) => {
    this.setState({
      currentCodeSample: codeSampleName,
      copied: false,
    })
  }

  copyToClipBoard = () => {
    copyToClipboard(this.props.children)
      .then(() => {
        this.setState({ copied: true })
        setTimeout(() => this.setState({ copied: false }), 3000)
      })
      .catch(() => false)
  }

  render() {
    const {
      viewport,
      changeViewPort,
      fullScreen,
      toggleFullScreen,
      showGrid,
      grid,
      showMore,
      open,
      nude,
      toggleOptions,
    } = this.props

    const { currentCodeSample, copied, copyCompatible, availableWidth } =
      this.state
    if (this.props.data === undefined) {
      return <div />
    }
    const iframeSrc =
      this.props.data.node.previewPath && this.state.location
        ? `${
            this.state.location.origin
          }/previews/${this.props.data.node.previewPath
            .split('docs/')
            .pop()}.html`
        : ''

    const ViewPortsObj = viewPorts
    const preview = this.props.data.node.codes
    return (
      <PreviewContainer fullScreen={fullScreen}>
        {fullScreen === true ? (
          <Container>
            <Left>
              <PreviewToolBar
                fullScreen={fullScreen}
                availableWidth={availableWidth}
                toggleFullScreen={toggleFullScreen}
                viewport={viewport}
                viewPorts={ViewPortsObj}
                changeViewPort={changeViewPort}
                showGrid={showGrid}
                grid={grid}
                iframeSrc={iframeSrc}
              />
              <Body ref={(body) => (this.body = body)}>
                <PreviewFrame
                  availableWidth={availableWidth}
                  viewport={viewport}
                  viewPorts={ViewPortsObj}
                  fullScreen={fullScreen}
                  data={this.props.data}
                  grid={grid}
                  showGrid={showGrid}
                  iframeSrc={iframeSrc}
                />
              </Body>
            </Left>
            <Right>
              <PreviewCodeSample
                fullScreen={fullScreen}
                preview={preview}
                showCode={this.showCode}
                currentCodeSample={currentCodeSample}
                copied={copied}
                copyCompatible={copyCompatible}
                copyCodeToClipBoard={this.copyCodeToClipBoard}
                getLanguage={this.getLanguage}
                open={open}
                showMore={showMore}
              />
            </Right>
          </Container>
        ) : (
          <div ref={this.contRef} style={{ margin: '2rem 0' }}>
            {!nude && (
              <PreviewToolBar
                fullScreen={fullScreen}
                availableWidth={availableWidth}
                toggleFullScreen={toggleFullScreen}
                viewport={viewport}
                viewPorts={ViewPortsObj}
                changeViewPort={changeViewPort}
                showGrid={showGrid}
                grid={grid}
                iframeSrc={iframeSrc}
              />
            )}
            <PreviewFrame
              availableWidth={availableWidth}
              viewport={viewport}
              viewPorts={ViewPortsObj}
              fullScreen={fullScreen}
              data={this.props.data}
              grid={grid}
              toggleOptions={toggleOptions}
              nude={nude}
              iframeSrc={iframeSrc}
            />

            {!nude && (
              <PreviewCodeSample
                fullScreen={fullScreen}
                preview={preview}
                showCode={this.showCode}
                currentCodeSample={currentCodeSample}
                copied={copied}
                copyCompatible={copyCompatible}
                copyCodeToClipBoard={this.copyCodeToClipBoard}
                getLanguage={this.getLanguage}
                open={open}
                showMore={showMore}
              />
            )}
          </div>
        )}
      </PreviewContainer>
    )
  }
}

export default PreviewComponent
