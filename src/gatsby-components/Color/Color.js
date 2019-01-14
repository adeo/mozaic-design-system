import styled, { css } from 'styled-components'
import React, { PureComponent } from 'react'

import Info from './ColorInfo'

const Container = styled.div`
  border: solid 1px #f5f5f5;
  border-radius: 3px;
  padding: 5px;
  margin: 20px 0;
`

const Swatch = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `};
`

class Color extends PureComponent {
  render() {
    const { color, name } = this.props

    return (
      <Container>
        <Swatch color={color} />
        <Info label="value" value={color} />
        <Info label="name" value={name} />
      </Container>
    )
  }
}

export default Color
