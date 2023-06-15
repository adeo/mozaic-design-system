import React from 'react'
import styled from 'styled-components'
import { checkStatus } from '../../utils/status'

const Flag = styled.span`
  font-size: 0.875rem;
  line-height: 1.5;
  padding-left: 0.2rem;
  font-weight: bold;

  ${({ status }) => {
    return status === 'stable' || status === 'ready'
      ? `
        color: #41a017;
    `
      : status === 'wip'
      ? `
        color: #c86f21;
    `
      : /*bêta*/ `
        color: #b42a27;
    `
  }}
`
const capitalizeFirstLetter = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1)

const StatusFlag = ({ status }) => {
  if (!status) return false
  const authorizedStatus = checkStatus(status)

  if (!authorizedStatus) return false
  const statusFormatted =
    authorizedStatus === 'wip'
      ? authorizedStatus.toUpperCase()
      : capitalizeFirstLetter(authorizedStatus)
  return <Flag status={authorizedStatus}>{statusFormatted}</Flag>
}

export default StatusFlag
