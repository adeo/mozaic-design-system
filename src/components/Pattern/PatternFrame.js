import React, { Component } from 'react'
import Prism from 'prismjs'

import PatternCodeSample from './PatternCodeSample'

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
    const js = document.createElement('script')

    js.innerHTML = pattern.js
    head.appendChild(style)
    document.body.innerHTML = pattern.html
    document.body.style.margin = 0

    style.innerHTML = `
      ${this.iframeCSS()}
      ${pattern.css}
    `
    head.appendChild(js)

    setTimeout(() => {
      this.setState({
        iframeHeight: this.refs.iframe.contentDocument.body.offsetHeight,
      })
    }, 50)
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

    const pattern = this.props.data.node.codes

    return (
      <div>
        <div
          style={{
            padding: '5px 0',
            margin: '25px 0',
            background:
              'repeating-linear-gradient(45deg,transparent,transparent 3px,#F5F5F5 3px,#F5F5F5 4px)',
          }}
        >
          <iframe
            title="toto"
            width="100%"
            style={{ margin: 0, padding: 0 }}
            frameBorder="0"
            height={iframeHeight}
            ref="iframe"
          />
        </div>
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
