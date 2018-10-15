import React, { Component } from 'react'

export class pattern extends Component {
  constructor(props) {
    super(props)
    this.state = { iframeHeight: 0 }
  }

  iframeCSS = () => `
    body, html {
      margin :0;
      padding :0;
      overflow: hidden
    }
  `

  patterns = {
    'button left': {
      css: `
        .ca-button { color: pink !important}
        ul {
          color: blue;
        }
        `,
      html: `
            <button class='ca-button'>my button</button>
            <div>
              <ul>
                  <li><span>hello</span></li>
                  <li><span>hello</span></li>
                  <li><span>hello</span></li>
                  <li><span>hello</span></li>
              </ul>
              <ul>
                  <li><span>hello</span></li>
                  <li><span>hello</span></li>
                  <li><span>hello</span></li>
                  <li><span>hello</span></li>
              </ul>
          </div>
        `,
      js: `
            console.log('hello')
            /*...*/
        `,
    },
  }

  componentDidMount() {
    this.updateIframe()
  }

  updateIframe = () => {
    const iframe = this.refs.iframe
    const document = iframe.contentDocument
    const head = document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    const js = document.createElement('script')

    js.innerHTML = this.patterns['button left'].js
    head.appendChild(style)
    document.body.innerHTML = this.patterns['button left'].html
    document.body.style.margin = 0

    style.innerHTML = `
      ${this.iframeCSS()}
      ${this.patterns['button left'].css}
    `
    head.appendChild(js)

    console.log(document.body.offsetHeight)

    setTimeout(() => {
      this.setState({
        iframeHeight: this.refs.iframe.contentDocument.body.offsetHeight,
      })
    }, 200)
  }

  render() {
    const { iframeHeight } = this.state

    return (
      <div>
        <h1 className="ca-button"> mon pattern </h1>
        <div style={{ padding: 10, border: 'solid 1px #F5F5F5', margin: 15 }}>
          <iframe
            title="toto"
            width="100%"
            style={{ margin: 0, padding: 0 }}
            frameBorder="0"
            height={iframeHeight}
            ref="iframe"
          />
        </div>
        <div>
          <pre>
            <code>{this.patterns['button left'].html}</code>
          </pre>
        </div>
        <div>
          <pre>
            <code>{this.patterns['button left'].css}</code>
          </pre>
        </div>
        <div>
          <pre>
            <code>{this.patterns['button left'].js}</code>
          </pre>
        </div>
      </div>
    )
  }
}

export default pattern
