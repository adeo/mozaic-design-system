import styled from 'styled-components'
import React from 'react'
import copyToClipboard from '../../utils/copy-to-clipboard'

const Info = styled.span`
  position: relative;
  padding: 2px 5px;
  font-size: 12px;
  background-color: #eff0f1;
  line-height: 2em;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #bcbec0;
  font-family: 'LeroyMerlin', sans-serif;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  margin-bottom: 3px;
`

const Copied = styled.span`
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
      copied: false,
    }
  }

  copyToClipBoard = () => {
    this.setState({ copied: true })
    copyToClipboard(this.props.children)
      .then(() => {
        console.log('Copied To Clipboard')
        setTimeout(() => this.setState({ copied: false }), 3000)
      })
      .catch(() => {
        console.log('Exception')
      })
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
