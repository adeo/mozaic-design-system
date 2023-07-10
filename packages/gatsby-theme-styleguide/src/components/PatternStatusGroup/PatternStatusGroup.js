import * as React from 'react'
import StatusFlag from '../StatusFlag'
import { checkPlatform, checkStatus } from '../../utils/status'
import * as styles from './status.module.css'

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
        <span className={styles.statusItem} key={index}>
          <span className={styles.statusText}>
            {currentPlatform}
            {':'}
          </span>
          <StatusFlag status={currentStatus} />
        </span>
      )
    })
    .filter((item) => !!item)

  if (!items.length) {
    return false
  }

  return <div className={styles.statusContainer}>{items}</div>
}

export default PatternStatusGroup
