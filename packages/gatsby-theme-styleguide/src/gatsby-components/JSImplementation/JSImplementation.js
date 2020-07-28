import React from 'react'
import styled from 'styled-components'
import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'
import IconLibrairy from '../IconLibrairy'

const StatusItem = styled.span`
  align-items: center;
  display: inline-flex;
  margin-right: ${MagicUnit}rem;
`

const StatusText = styled.span`
  color: black;
  font-weight: bold;
  margin-right: 0.5rem;
`

const Link = styled.a`
  color: black;
  font-weight: bold;
  margin-right: 0.5rem;
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
          <StatusText>{key}</StatusText>{' '}
          <Link href={value}>
            <IconLibrairy name="external-link" size="12" fill="#554f52" />
          </Link>
        </StatusItem>
      )
    })
    .filter(item => !!item)

  if (!items.length) {
    return false
  }

  return <div className="patternstatusflags">{items}</div>
}

export default JSImplementation
