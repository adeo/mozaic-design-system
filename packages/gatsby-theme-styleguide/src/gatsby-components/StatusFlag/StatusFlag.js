import React from 'react'
import styled from 'styled-components'
import { checkStatus } from '../../utils/status'

const Flag = styled.span`
  background: #fff;
  border: solid 1px transparent;
  border-radius: 2px;
  font-size: 0.875rem;
  line-height: 1;
  padding: 0.2rem 0.5rem 0.3rem;

  ${({ status }) => {
    return status === 'stable'
      ? `
        border-color: #58e3b7;
        color: #328269;
    `
      : status === 'wip'
      ? `
        border-color: #e3cb58;
        color: #a58e1b;
    `
      : /*bêta*/ `
        border-color: #e35876;
        color: #82325e;
    `
  }}
`

const StatusFlag = ({ status }) => {
  const authorizedStatus = checkStatus(status)
  if (!authorizedStatus) return false
  return (
    <Flag className="pattern-status__flag" status={authorizedStatus}>
      {authorizedStatus}
    </Flag>
  )
}

export default StatusFlag
