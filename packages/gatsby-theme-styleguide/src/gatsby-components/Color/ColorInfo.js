import styled from 'styled-components'
import React, { PureComponent } from 'react'
import copyToClipboard from '../../utils/copy-to-clipboard'

const Info = styled.div`
  width: 100%;
  padding: 3px 5px;
  font-size: 10px;
  color: #999;
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
  font-size: 9px;
  margin-left: 10px;
`

const Label = styled.div`
  display: inline-block;
  min-width: 35px;
  text-transform: uppercase;
  text-align: center;
  margin-right: 10px;
  padding-right: 10px;
  border-right: solid 1px #f5f5f5;
`

class Color extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      copyCompatible: false,
      copied: false,
    }
  }

  copyToClipBoard = (value) => {
    copyToClipboard(value)
      .then(() => {
        this.setState({ copied: true })
        setTimeout(() => this.setState({ copied: false }), 3000)
      })
      .catch(() => false)
  }

  render() {
    const { value, label } = this.props
    const { copied } = this.state

    return (
      <Info onClick={() => this.copyToClipBoard(value)}>
        <Label>
          <span>{label} : </span>
        </Label>
        <b>{value}</b>
        {copied && <Copied>copied</Copied>}
      </Info>
    )
  }
}

export default Color
