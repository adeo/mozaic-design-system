import React from 'react'
import styled from 'styled-components'
import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'
import IconLibrairy from '../IconLibrairy'
import StatusFlag from '../StatusFlag'

const StatusItem = styled.span`
  align-items: center;
  display: inline-flex;
  margin-right: ${MagicUnit}rem;
`

const StatusText = styled.div`
  color: black;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5;
  text-transform: capitalize;
`

const StatusName = styled.span`
  text-decoration: underline;
`

const StatusContainer = styled.div`
  display: inline-block;
`

const Link = styled.a`
  color: black;
  font-weight: bold;
  margin: 0 0.25rem;
`

const JSImplementation = ({ links }) => {
  if (!links) {
    return false
  }

  const items = Object.entries(links)
    .map(([key, value], index) => {
      if (!key || !value) {
        return false
      }
      return (
        <StatusItem key={index}>
          {value.link !== '' ? (
            <StatusText>
              <StatusName>{key}</StatusName>
              <Link target="_blank" href={value.link}>
                <IconLibrairy name="external-link" size="12" fill="#999999" />
              </Link>
            </StatusText>
          ) : (
            <StatusText>{key}</StatusText>
          )}
          {':'}
          <StatusFlag status={value.status} />
        </StatusItem>
      )
    })
    .filter(item => !!item)

  if (!items.length) {
    return false
  }

  return <StatusContainer>{items}</StatusContainer>
}

export default JSImplementation
