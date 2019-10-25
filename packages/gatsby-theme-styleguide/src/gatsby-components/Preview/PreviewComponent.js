import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

import PreviewCodeSample from './PreviewCodeSample'
import PreviewToolBar from './PreviewToolBar'
import PreviewFrame from './PreviewFrame'

import tokensObject from '@mozaic-ds/tokens/build/js/tokensObject.js'

import copyToClipBoard from '../../utils/fnHelper'

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

    this.body = React.createRef()
    this.state = {
      currentCodeSample: 'html',
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
      scss: 'scss',
    }[ext])

  showCode = codeSampleName => {
    this.setState({
      currentCodeSample: codeSampleName,
      copied: false,
    })
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

    if (this.state.copyCompatible) {
      navigator.clipboard.writeText(codeToCopy).then(
        () => {
          this.setState({ copied: true })
        },
        () => {
          alert(`copy impossible !`)
        }
      )
    } else {
      copyToClipBoard(codeToCopy)
      this.setState({ copied: true })
      return Promise.resolve(true).then(
        () => {
          this.setState({ copied: true })
        },
        () => {
          alert(`copy impossible !`)
        }
      )
    }
  }
  render() {
    const {
      viewport,
      changeViewPort,
      fullScreen,
      toggleFullScreen,
      availableWidth,
      showGrid,
      grid,
      showMore,
      open,
      nude,
      toggleOptions,
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
                showGrid={showGrid}
                grid={grid}
              />
              <Body ref={body => (this.body = body)}>
                <PreviewFrame
                  availableWidth={availableWidth}
                  viewport={viewport}
                  viewPorts={ViewPortsObj}
                  fullScreen={fullScreen}
                  data={this.props.data}
                  grid={grid}
                  showGrid={showGrid}
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
          <div
            ref={contRef => (this.contRef = contRef)}
            style={{ margin: '2rem 0' }}
          >
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
