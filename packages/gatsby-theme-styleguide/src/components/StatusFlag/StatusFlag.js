import * as React from 'react'
import { checkStatus } from '../../utils/status'
import * as styles from '../PatternStatusGroup/status.module.css'

const StatusFlag = ({ status }) => {
  const platformStatus = checkStatus(status)

  if (!status || !platformStatus) return false

  return (
    <span
      className={`${styles.statusFlag} ${styles[platformStatus]}`}
      status={platformStatus}
    >
      {platformStatus}
    </span>
  )
}

export default StatusFlag
