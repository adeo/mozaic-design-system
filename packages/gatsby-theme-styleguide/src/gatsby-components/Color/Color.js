import styled, { css } from 'styled-components'
import React, { PureComponent } from 'react'

import Copy from '../Copy'

const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px rgba(0, 0, 0, 0.05);
  padding: 0;
`
const Swatch = styled.div`
  width: 100%;
  padding-bottom: 8%;
  max-height: 150px;
  margin-bottom: 10px;

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `};
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
  render() {
    const { color, scss, ios, android, es6 } = this.props

    return (
      <Container>
        <Swatch color={color} />
        <Copy value={color} children={<Value label="val" value={color} />} />
        <Copy value={scss} children={<Value label="scss" value={scss} />} />
        <Copy value={ios} children={<Value label="ios" value={ios} />} />
        <Copy
          value={android}
          children={<Value label="andr" value={android} />}
        />
        <Copy value={es6} children={<Value label="es6" value={es6} />} />
      </Container>
    )
  }
}

const Value = ({ label, value }) => {
  return (
    <span>
      <Label>
        <span>{label}</span>
      </Label>
      <b>{value}</b>
    </span>
  )
}

export default Color
