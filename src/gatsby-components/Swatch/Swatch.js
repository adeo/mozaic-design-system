import React from 'react'
import styled from 'styled-components'

import Color from '../Color'
import tokens from '../../tokens/build/js/tokensObject.js'

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

// TODO : use a custom format from style dictionary
// to provide those syntax transformations
const scssSyntax = arr => `$${arr.join('-')}`
const andoidSyntax = arr =>
  arr
    .join('_')
    .toLowerCase()
    .replace('-', '_')

// END-TODO

const Swatch = ({ id }) => (
  <Wrapper>
    {Object.keys(tokens.color[id]).map(colorKey => (
      <ColorWrapper key={`${id}${colorKey}`}>
        <Color
          color={tokens.color[id][colorKey].value}
          scss={scssSyntax(tokens.color[id][colorKey].path)}
          ios={tokens.color[id][colorKey].name}
          android={andoidSyntax(tokens.color[id][colorKey].path)}
          es6={tokens.color[id][colorKey].name}
        />
      </ColorWrapper>
    ))}
  </Wrapper>
)

export default Swatch
