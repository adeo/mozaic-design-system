import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import Prism from 'prismjs'

import PatternCodeSample from './PatternCodeSample'
import PatternToolBar from './PatternToolBar'
import PatternFrame from './PatternFrame'

import tokensObject from '../../tokens/build/js/tokensObject.js'

let viewPorts = {}

Object.keys(tokensObject.screen).map(
  screenName =>
    (viewPorts[screenName] = Number(
      tokensObject.screen[screenName].value.replace('px', '')
    ))
)

const PatternContainer = styled.div`
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

export class PatternComponent extends PureComponent {
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
    const pattern = this.props.data.node.codes
    const codeToCopy = pattern[currentCodeSample]

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
    const pattern = this.props.data.node.codes

    return (
      <PatternContainer fullScreen={fullScreen}>
        {fullScreen === true ? (
          <Container>
            <Left>
              <PatternToolBar
                fullScreen={fullScreen}
                availableWidth={availableWidth}
                toggleFullScreen={toggleFullScreen}
                viewport={viewport}
                viewPorts={ViewPortsObj}
                changeViewPort={changeViewPort}
              />
              <Body ref={body => (this.body = body)}>
                <PatternFrame
                  availableWidth={availableWidth}
                  viewport={viewport}
                  viewPorts={ViewPortsObj}
                  fullScreen={fullScreen}
                  data={this.props.data}
                />
              </Body>
            </Left>
            <Right>
              <PatternCodeSample
                fullScreen={fullScreen}
                pattern={pattern}
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
            <PatternToolBar
              fullScreen={fullScreen}
              availableWidth={availableWidth}
              toggleFullScreen={toggleFullScreen}
              viewport={viewport}
              viewPorts={ViewPortsObj}
              changeViewPort={changeViewPort}
            />
            <PatternFrame
              availableWidth={availableWidth}
              viewport={viewport}
              viewPorts={ViewPortsObj}
              fullScreen={fullScreen}
              data={this.props.data}
            />
            <PatternCodeSample
              fullScreen={fullScreen}
              pattern={pattern}
              showCode={this.showCode}
              currentCodeSample={currentCodeSample}
              copied={copied}
              copyCompatible={copyCompatible}
              copyCodeToClipBoard={this.copyCodeToClipBoard}
              getLanguage={this.getLanguage}
            />
          </div>
        )}
      </PatternContainer>
    )
  }
}

export default PatternComponent
