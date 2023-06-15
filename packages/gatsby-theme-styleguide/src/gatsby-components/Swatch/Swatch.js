import React from 'react'
import styled from 'styled-components'

import Color from '../Color'
import tokens from '@mozaic-ds/tokens/build/js/tokensObject.js'
import adeoTokens from '@mozaic-ds/tokens/buildAdeo/js/tokensObject.js'

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
const scssSyntax = (arr) => `$${arr.join('-')}`
const andoidSyntax = (arr) => arr.join('_').toLowerCase().replace('-', '_')
const realTokens = (preset) => (preset === 'adeo' ? adeoTokens : tokens)
// END-TODO

const Swatch = ({ id, preset }) => (
  <Wrapper>
    {Object.keys(realTokens(preset).color[id]).map((colorKey) => (
      <ColorWrapper key={`${id}${colorKey}`}>
        <Color
          color={realTokens(preset).color[id][colorKey].value}
          scss={scssSyntax(realTokens(preset).color[id][colorKey].path)}
          ios={realTokens(preset).color[id][colorKey].name}
          android={andoidSyntax(realTokens(preset).color[id][colorKey].path)}
          es6={realTokens(preset).color[id][colorKey].name}
        />
      </ColorWrapper>
    ))}
  </Wrapper>
)

export default Swatch
