import React from 'react'
import styled from 'styled-components'
import Copy from '../Copy'
import * as tokens from '@mozaic-ds/tokens/build/js/tokens.js'
import * as adeoTokens from '@mozaic-ds/tokens/buildAdeo/js/tokens.js'

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
  display: inline-block;
  width: 100%;
  margin-right: 10px;
  padding-right: 10px;
  border-right: solid 1px #f5f5f5;
`

const scssSyntax = (arr) =>
  `$${arr
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase()}`

const getTokens = (preset) => (preset === 'adeo' ? adeoTokens : tokens)    

const DesignTokens = ({ id, preset }) => (
  <Wrapper>
    {Object.entries(getTokens(preset)).map((item) => (
      <Container>
        <Token name={item[0]} scss={scssSyntax(item[0])} value={item[1]} />
      </Container>
    ))}
  </Wrapper>
)

const Token = ({ name, scss, value }) => {
  return (
    <div>
      <Label>
        <span>{name}</span>
      </Label>
      <Label>
        <span>SCSS: </span>
        <span>{scss}</span>
      </Label>
      <Label>
        <span>Value: </span>
        <span style={{ backgroundColor: `${value}` }}>{value}</span>
      </Label>
    </div>
  )
}

export default DesignTokens
