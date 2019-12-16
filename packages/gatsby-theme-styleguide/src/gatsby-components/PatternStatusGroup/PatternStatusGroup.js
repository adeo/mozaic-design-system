import React from 'react'
import styled from 'styled-components'

import StatusFlag from '../StatusFlag'
import { checkPlatform, checkStatus } from '../../utils/status'
import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'

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

const PatternStatusGroup = ({ status }) => {
  if (!status) {
    return false
  }

  const items = Object.entries(status)
    .map(([key, value], index) => {
      const currentPlatform = checkPlatform(key)
      const currentStatus = checkStatus(value)

      if (!currentPlatform || !currentStatus) {
        return false
      }

      return (
        <StatusItem key={index}>
          <StatusText>{currentPlatform}</StatusText>{' '}
          <StatusFlag status={currentStatus} />
        </StatusItem>
      )
    })
    .filter(item => !!item)

  if (!items.length) {
    return false
  }

  return <div className="patternstatusflags">{items}</div>
}

export default PatternStatusGroup
