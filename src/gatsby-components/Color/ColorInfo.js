import styled from 'styled-components'
import React, { PureComponent } from 'react'

const Info = styled.div`
  width: 100%;
  font-size: 14px;
  height: 2em;
  line-height: 2em;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: solid 1px #f5f5f5;
  }
`

const Copied = styled.div`
  display: inline-block;
  color: #f5f5f5;
  background: #999;
  border-radius: 3px;
  padding: 3px;
  line-height: 1;
  font-size: 14px;
  margin-left: 10px;
`

class Color extends PureComponent {
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
    if (this.state.copyCompatible) {
      navigator.clipboard.writeText(this.props.value).then(
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
    const { value, label } = this.props
    const { copied } = this.state

    return (
      <Info onClick={this.copyToClipBoard}>
        {label}: <b>{value}</b>
        {copied && <Copied>copied</Copied>}
      </Info>
    )
  }
}

export default Color
