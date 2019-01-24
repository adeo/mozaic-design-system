import React from 'react'
import styled from 'styled-components'

import Color from '../Color'
import Tokens from './SwatchTokens'

const ColorWrapper = styled.div`
  flex: 0 0 32%;
  min-width: 75px;
  box-sizing: border-box;
  padding: 7px;
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`

const Swatch = ({ id }) => (
  <Wrapper>
    {Object.keys(Tokens[id]).map(colorKey => (
      <ColorWrapper key={colorKey}>
        <Color
          color={Tokens[id][colorKey].RGBval}
          scss={Tokens[id][colorKey].scss}
          json={Tokens[id][colorKey].json}
          xml={Tokens[id][colorKey].xml}
          js={Tokens[id][colorKey].js}
        />
      </ColorWrapper>
    ))}
  </Wrapper>
)

export default Swatch
