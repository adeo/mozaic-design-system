import styled from 'styled-components'
import React from 'react'
import copyToClipboard from '../../utils/copy-to-clipboard'

const Info = styled.code`
  position: relative;
  padding: 1px 5px 2px;
  font-size: 0.8em;
  background-color: #eff0f1;
  line-height: 1.2;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
  font-family: Menlo, Monaco, 'Courier New', monospace;
  border-radius: 2px;
`

const Copied = styled.span`
  display: inline-block;
  padding: 1px 5px;
  border-radius: 2px 2px 0 0;
  font-size: 12px;
  line-height: 2em;
  position: absolute;
  font-size: 12px;
  background-color: #999;
  color: #fff;
  bottom: 100%;
  left: 0;
  font-family: 'LeroyMerlin', sans-serif;
`

class InlineCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false,
    }
  }

  copyToClipBoard = () => {
    copyToClipboard(this.props.children)
      .then(() => {
        this.setState({ copied: true })
        setTimeout(() => this.setState({ copied: false }), 3000)
      })
      .catch(() => false)
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
