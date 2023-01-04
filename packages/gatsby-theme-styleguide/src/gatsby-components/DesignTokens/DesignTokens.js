import React from 'react'
import styled from 'styled-components'
import Copy from '../Copy'
import './style.scss'

import tokens from '@mozaic-ds/tokens/build/js/tokensObject.js'
import adeoTokens from '@mozaic-ds/tokens/buildAdeo/js/tokensObject.js'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`
const Container = styled.div`
  flex: 0 0 32%;
  min-width: 75px;
  box-sizing: border-box;
  padding: 7px;
`
const Label = styled.div`
  width: 100%;
  margin-right: 10px;
  padding-right: 10px;
  border-right: solid 1px #f5f5f5;
`

const scssSyntax = (arr) => arr && arr.path ? `$${arr.path.join('-')}` : ''

const getTokens = (preset) => (preset === 'adeo' ? adeoTokens : tokens)
const getToken = (preset, token) => {
  
  if (Array.isArray(token)) {
    return token.length > 2 ? getTokens(preset)[token[0]][token[1]][token[2]] : getTokens(preset)[token[0]][token[1]]
  } 
  return getTokens(preset)[token]
}


const DesignTokens = ({ id, preset, token }) => (
  <Wrapper>
    {Object.entries(getToken(preset, token))
      .sort()
      .map((item) => {
        return (
          <Container key={item[0]}>
            <Token
              name={item[0]}
              scss={scssSyntax(item[1])}
              value={item[1].value}
            />
          </Container>
        )
      })}
  </Wrapper>
)

const Token = ({ name, scss, value }) => {
  return (
    <div>
      <Copy value={name} children={<Value label="name" value={name} />} />
      <Copy value={scss} children={<Value label="scss" value={scss} />} />
      <Copy value={value} children={<Value label="value" value={value} />} />
    </div>
  )
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

export default DesignTokens
