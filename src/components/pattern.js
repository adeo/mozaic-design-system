import React, { Component } from 'react'

const jsPattern = `
console.log('hello')
`

const htmlPattern = `
<button class='ca-button'>my button</button>
`

const cssPattern = `
.ca-button { color: pink !important}
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
      overflow: hidden
    }
  `

  patterns = {
    'pages/hello/button': {
      css: cssPattern,
      html: htmlPattern,
      js: jsPattern,
    },
  }

  componentDidMount() {
    this.updateIframe()
    this.isClipBoardAPIAvailable()
  }

  updateIframe = () => {
    const pattern = this.patterns[this.props.path]
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
    }, 200)
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
    const pattern = this.patterns[this.props.path]
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

    const { path } = this.props

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
        {Object.keys(this.patterns[path]).map(codeSampleName => (
          <button
            style={{
              backgroundColor:
                this.state.currentCodeSample === codeSampleName
                  ? 'blue'
                  : '#999',
            }}
            onClick={() =>
              this.setState({
                currentCodeSample: codeSampleName,
                copied: false,
              })
            }
          >
            {codeSampleName}
          </button>
        ))}

        {copyCompatible && (
          <button style={{ float: 'right' }} onClick={this.copyCodeToClipBoard}>
            {copied ? 'copied' : 'copy code'}
          </button>
        )}
        {currentCodeSample && (
          <div>
            <pre>
              <code>{this.patterns[path][currentCodeSample]}</code>
            </pre>
          </div>
        )}
      </div>
    )
  }
}

export default Pattern
