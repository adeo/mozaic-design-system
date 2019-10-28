import styled from 'styled-components'
import React from 'react'
import copyToClipBoard from '../../utils/copy-to-clipboard'

const Info = styled.div`
  width: 100%;
  padding: 3px 5px;
  font-size: 10px;
  color: #999;
  line-height: 2em;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;

  &:not(:last-child) {
    border-bottom: solid 1px #f5f5f5;
  }
`

const Copied = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #f5f5f5;
  background: #999;
  border-radius: 3px;
  padding: 3px;
  line-height: 1;
  font-size: 9px;
`

class Copy extends React.Component {
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
    const value = this.props.value
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

export default Copy
