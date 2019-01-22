import styled, { css } from 'styled-components'
import React, { PureComponent } from 'react'

import Info from './ColorInfo'

const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px rgba(0, 0, 0, 0.05);
  padding: 0;
`

const Swatch = styled.div`
  width: 100%;
  padding-bottom: 33.33%;
  max-height: 150px;
  margin-bottom: 10px;

  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `};
`

class Color extends PureComponent {
  render() {
    const { color, scss, json, xml, js } = this.props

    return (
      <Container>
        <Swatch color={color} />
        <Info label="val" value={color} />
        <Info label="scss" value={scss} />
        <Info label="json" value={json} />
        <Info label="xml" value={xml} />
        <Info label="js" value={js} />
      </Container>
    )
  }
}

export default Color
