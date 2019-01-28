import React, { Component } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'

import { MagicUnit, LocalRemValue } from '../../tokens/build/js/tokens.js'
import PatternCodeSample from './PatternCodeSample'

const remMagicUnit = MagicUnit / LocalRemValue
const trans = 'transparent'
const lineColor = `rgba(0, 100, 100, 0.1)`
const subLineColor = `rgba(0, 100, 100, 0.03)`

const FrameContainer = styled.div`
  padding: ${remMagicUnit}rem 0;
  margin: ${remMagicUnit}rem 0;
  background-image: linear-gradient(90deg, ${lineColor} 1px, ${trans} 1px),
    linear-gradient(0deg, ${lineColor} 1px, ${trans} 1px),
    linear-gradient(90deg, ${subLineColor} 1px, ${trans} 1px),
    linear-gradient(0deg, ${subLineColor} 1px, ${trans} 1px),
    linear-gradient(90deg, ${subLineColor} 1px, ${trans} 1px),
    linear-gradient(0deg, ${subLineColor} 1px, ${trans} 1px);

  background-size: ${remMagicUnit}rem ${remMagicUnit}rem,
    ${remMagicUnit}rem ${remMagicUnit}rem,
    ${remMagicUnit / 2}rem ${remMagicUnit / 2}rem,
    ${remMagicUnit / 2}rem ${remMagicUnit / 2}rem,
    ${remMagicUnit / 4}rem ${remMagicUnit / 4}rem,
    ${remMagicUnit / 4}rem ${remMagicUnit / 4}rem;
`

export class Pattern extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iframeHeight: 0,
      currentCodeSample: null,
      copyCompatible: false,
      copied: false,
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
    this.isClipBoardAPIAvailable()
  }

  showCode = codeSampleName => {
    this.setState(
      {
        currentCodeSample: codeSampleName,
        copied: false,
      },
      Prism.highlightAll
    )
  }

  getLanguage = ext =>
    ({
      js: 'javascript',
      json: 'JSON',
      html: 'html',
      css: 'css',
      scss: 'css',
    }[ext])

  updateIframe = () => {
    const pattern = this.props.data.node.codes
    const iframe = this.refs.iframe
    const document = iframe.contentDocument
    const head = document.getElementsByTagName('head')[0]
    const style = document.createElement('style')

    if (pattern.js) {
      const js = document.createElement('script')
      js.innerHTML = pattern.js
      head.appendChild(js)
    }

    if (pattern.css) {
      style.innerHTML = `
        ${this.iframeCSS()}
        ${pattern.css}
      `
    } else {
      style.innerHTML = this.iframeCSS()
    }

    head.appendChild(style)

    document.body.innerHTML =
      pattern.html !== undefined ? pattern.html : 'No html'
    document.body.style.margin = 0

    this.setState({
      iframeHeight: this.refs.iframe.contentDocument.body.offsetHeight,
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
    const pattern = this.props.data.node.codes
    const codeToCopy = pattern[currentCodeSample]

    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        this.setState({ copied: true })
      },
      () => {
        alert(`ain't possible to copy shit !`)
      }
    )
  }

  render() {
    const {
      iframeHeight,
      currentCodeSample,
      copyCompatible,
      copied,
    } = this.state

    if (this.props.data === undefined) {
      return <div />
    }

    const pattern = this.props.data.node.codes

    return (
      <div>
        <FrameContainer>
          <iframe
            title="toto"
            width="100%"
            style={{ margin: 0, padding: 0 }}
            frameBorder="0"
            height={iframeHeight}
            ref="iframe"
          />
        </FrameContainer>
        <PatternCodeSample
          pattern={pattern}
          showCode={this.showCode}
          currentCodeSample={currentCodeSample}
          copied={copied}
          copyCompatible={copyCompatible}
          copyCodeToClipBoard={this.copyCodeToClipBoard}
          getLanguage={this.getLanguage}
        />
      </div>
    )
  }
}

export default Pattern
