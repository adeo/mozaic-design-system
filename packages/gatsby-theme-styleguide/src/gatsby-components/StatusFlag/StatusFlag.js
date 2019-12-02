import React from 'react'
import styled from 'styled-components'
import { checkStatus } from '../../utils/status'

const Flag = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1;
  padding: 0.2rem 0.5rem 0.3rem;
  background: #fff;
  border-radius: 3px;

  ${({ status }) => {
    return status === 'stable'
      ? `
        border: solid 1px #58e3b7;
        color: #328269;
    `
      : status === 'wip'
      ? `
        border: solid 1px #e3cb58 ;
        color: #a58e1b;
    `
      : /*bêta*/ `
        border: solid 1px #e35876;
        color: #82325e;
    `
  }}
`

const StatusFlag = ({ status }) => {
  const authorizedStatus = checkStatus(status)
  if (!authorizedStatus) return false
  return <Flag status={authorizedStatus}>{authorizedStatus}</Flag>
}

export default StatusFlag
