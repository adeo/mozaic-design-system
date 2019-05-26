import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import Prism from 'prismjs'

import PreviewCodeSample from './PreviewCodeSample'
import PreviewToolBar from './PreviewToolBar'
import PreviewFrame from './PreviewFrame'

import tokensObject from '@gardencss/tokens/build/js/tokensObject.js'

let viewPorts = {}

Object.keys(tokensObject.screen).map(
  screenName =>
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
`
const Right = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  min-width: 30%;
  display: flex;
  flex-flow: column nowrap;
`

const Body = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export class PreviewComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.body = React.createRef()
    this.state = {
      currentCodeSample: null,
      copyCompatible: false,
      copied: false,
    }
  }

  componentDidMount() {
    this.isClipBoardAPIAvailable()
    this.props.getAvailableWidth(this.contRef.clientWidth)
  }

  componentDidUpdate() {
    if (this.props.fullScreen) {
      this.props.getAvailableWidth(this.body.clientWidth)
    } else {
      this.props.getAvailableWidth(this.contRef.clientWidth)
    }
  }

  getLanguage = ext =>
    ({
      js: 'javascript',
      json: 'JSON',
      html: 'html',
      css: 'css',
      scss: 'css',
    }[ext])

  showCode = codeSampleName => {
    this.setState(
      {
        currentCodeSample: codeSampleName,
        copied: false,
      },
      Prism.highlightAll
    )
  }

  isClipBoardAPIAvailable = () => {
    if (navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
        if (result.state === 'granted' || result.state === 'prompt') {
          this.setState({ copyCompatible: true })
        }
      })
    }
  }

  copyCodeToClipBoard = () => {
    const { currentCodeSample } = this.state
    const Preview = this.props.data.node.codes
    const codeToCopy = Preview[currentCodeSample]

    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        this.setState({ copied: true })
      },
      () => {
        alert(`copy impossible !`)
      }
    )
  }
  render() {
    const {
      viewport,
      changeViewPort,
      fullScreen,
      toggleFullScreen,
      availableWidth,
    } = this.props

    const { currentCodeSample, copied, copyCompatible } = this.state

    if (this.props.data === undefined) {
      return <div />
    }

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
              />
              <Body ref={body => (this.body = body)}>
                <PreviewFrame
                  availableWidth={availableWidth}
                  viewport={viewport}
                  viewPorts={ViewPortsObj}
                  fullScreen={fullScreen}
                  data={this.props.data}
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
              />
            </Right>
          </Container>
        ) : (
          <div ref={contRef => (this.contRef = contRef)}>
            <PreviewToolBar
              fullScreen={fullScreen}
              availableWidth={availableWidth}
              toggleFullScreen={toggleFullScreen}
              viewport={viewport}
              viewPorts={ViewPortsObj}
              changeViewPort={changeViewPort}
            />
            <PreviewFrame
              availableWidth={availableWidth}
              viewport={viewport}
              viewPorts={ViewPortsObj}
              fullScreen={fullScreen}
              data={this.props.data}
            />
            <PreviewCodeSample
              fullScreen={fullScreen}
              preview={preview}
              showCode={this.showCode}
              currentCodeSample={currentCodeSample}
              copied={copied}
              copyCompatible={copyCompatible}
              copyCodeToClipBoard={this.copyCodeToClipBoard}
              getLanguage={this.getLanguage}
            />
          </div>
        )}
      </PreviewContainer>
    )
  }
}

export default PreviewComponent
