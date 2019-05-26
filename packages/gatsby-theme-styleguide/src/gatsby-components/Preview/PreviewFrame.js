import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'

import { MagicUnit } from '@gardencss/tokens/build/js/tokens.js'

const lineColor = `rgba(0, 100, 100, 0.1)`
const subLineColor = `rgba(0, 100, 100, 0.03)`

const FrameContainer = styled.div`
  padding: ${MagicUnit}rem 0;
  margin: ${MagicUnit}rem 0;
  background-image: linear-gradient(90deg, ${lineColor} 1px, transparent 1px),
    linear-gradient(0deg, ${lineColor} 1px, transparent 1px),
    linear-gradient(90deg, ${subLineColor} 1px, transparent 1px),
    linear-gradient(0deg, ${subLineColor} 1px, transparent 1px),
    linear-gradient(90deg, ${subLineColor} 1px, transparent 1px),
    linear-gradient(0deg, ${subLineColor} 1px, transparent 1px);

  background-size: ${MagicUnit}rem ${MagicUnit}rem,
    ${MagicUnit}rem ${MagicUnit}rem, ${MagicUnit / 2}rem ${MagicUnit / 2}rem,
    ${MagicUnit / 2}rem ${MagicUnit / 2}rem,
    ${MagicUnit / 4}rem ${MagicUnit / 4}rem,
    ${MagicUnit / 4}rem ${MagicUnit / 4}rem;

  ${({ viewport, viewPorts, availableWidth, fullScreen }) => css`
    width: ${viewPorts[viewport]}px;
    min-width: ${viewPorts[viewport]}px;

    transform: scale(
      ${availableWidth > viewPorts[viewport]
        ? 1
        : availableWidth / viewPorts[viewport]}
    );

    transform-origin: ${fullScreen ? 'center' : 'left'};
  `};
`

const Frame = styled.iframe`
  width: 100%;
  margin: 0;
  padding: 0;
`

export class PreviewFrame extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      iframeHeight: 0,
    }
  }

  iframeCSS = () => `
    body, html {
      margin :0;
      padding :0;
      display: block;
      overflow: hidden
    }
  `

  componentDidMount() {
    this.updateIframe()
  }

  updateIframe = () => {
    const preview = this.props.data.node.codes
    const iframe = this.refs.iframe
    const document = iframe.contentDocument
    const head = document.getElementsByTagName('head')[0]
    const style = document.createElement('style')

    if (preview.js) {
      const js = document.createElement('script')
      js.innerHTML = preview.js
      head.appendChild(js)
    }

    if (preview.css) {
      style.innerHTML = `
        ${this.iframeCSS()}
        ${preview.css}
      `
    } else {
      style.innerHTML = this.iframeCSS()
    }

    head.appendChild(style)

    document.body.innerHTML =
      preview.html !== undefined ? preview.html : 'No html'
    document.body.style.margin = 0

    this.setState({
      iframeHeight: this.refs.iframe.contentDocument.body.offsetHeight,
    })
  }

  render() {
    const { iframeHeight } = this.state
    const { viewport, viewPorts, availableWidth, fullScreen } = this.props

    if (this.props.data === undefined) {
      return <div />
    }

    return (
      <FrameContainer
        viewport={viewport}
        viewPorts={viewPorts}
        availableWidth={availableWidth}
        fullScreen={fullScreen}
      >
        <Frame frameBorder="0" height={iframeHeight} ref="iframe" />
      </FrameContainer>
    )
  }
}

export default PreviewFrame
