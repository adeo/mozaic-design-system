import styled from 'styled-components'
import React from 'react'
import copyToClipBoard from '../../utils/copy-to-clipboard'

const Info = styled.div`
  display: inline-block;
  padding: 2px 5px;
  font-size: 12px;
  background-color: #eff0f1;
  line-height: 2em;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #bcbec0;
  font-family: 'LeroyMerlin', sans-serif;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  margin-bottom: 3px;
`

const Copied = styled.div`
  display: inline-block;
  padding: 2px 5px;
  font-size: 12px;
  line-height: 2em;
  position: relative;
  font-family: 'LeroyMerlin', sans-serif;
`

class InlineCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copyCompatible: false,
      copied: false,
    }
  }

  componentDidMount() {
    this.isClipBoardAPIAvailable()
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

  copyToClipBoard = () => {
    const value = this.props.children
    if (this.state.copyCompatible) {
      navigator.clipboard.writeText(value).then(
        () => {
          this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1000)
          })
        },
        () => {
          console.error('error while copying to clipboard')
        }
      )
    } else {
      copyToClipBoard(value)
      this.setState({ copied: true })
      return Promise.resolve(true).then(
        () => {
          this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1000)
          })
        },
        () => {
          console.error('error while copying to clipboard')
        }
      )
    }
  }

  render() {
    const { children } = this.props
    const { copied } = this.state

    return (
      <Info onClick={this.copyToClipBoard}>
        {children}
        {copied && <Copied>copied</Copied>}
      </Info>
    )
  }
}

export default InlineCode
