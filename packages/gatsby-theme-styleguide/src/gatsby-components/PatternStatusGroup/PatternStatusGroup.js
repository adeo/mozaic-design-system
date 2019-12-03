import React from 'react'
import styled from 'styled-components'

import StatusFlag from '../StatusFlag'
import { checkPlatform, checkStatus } from '../../utils/status'

const StatusItem = styled.span`
  display: inline-flex;
  font-size: 0.875rem;
  color: #525252;
  margin-right: 1rem;

  span {
    margin-right: 0.5rem;
  }
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
          <span>{currentPlatform}</span> <StatusFlag status={currentStatus} />
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
