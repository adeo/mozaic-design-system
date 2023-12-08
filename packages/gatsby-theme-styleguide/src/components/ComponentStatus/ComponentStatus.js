import * as React from 'react'
import { DisplayExternalLink16 } from '../icons'
import * as styles from './componentstatus.module.css'

const getStyles = (status) => {
  let color

  switch (status) {
    case 'ready':
      color = '#41a017'
      break
    case 'stable':
      color = '#41a017'
      break
    case 'wip':
      color = '#c86f21'
      break
    default:
      color = '#b42a27'
  }

  return {
    '--color': color,
  }
}

const ComponentStatus = (props) => {
  const { links, status } = props

  if (!links || !status) {
    return false
  }

  const allStatus = Object.assign(status, links)

  function StatusLink({ value, hasLink }) {
    if (hasLink) {
      return (
        <a
          href={value.link}
          className={styles.statusLink}
          aria-label="Open in a new window"
        >
          <DisplayExternalLink16 />
        </a>
      )
    }

    return
  }

  return (
    <div className={styles.statusContainer}>
      {Object.keys(allStatus).map((key, index) => {
        const techno = key
        const value = allStatus[key]

        if (!value) return false

        const hasLink = value.hasOwnProperty('link')
        const status = hasLink ? value.status : value

        return (
          <div className={styles.statusItem} key={index}>
            <span className={styles.statusLabel}>
              <span className={styles.statusName}>{techno}</span>
              <StatusLink value={value} hasLink={hasLink} />:
            </span>
            <span className={styles.statusFlag} style={getStyles(status)}>
              {status}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default ComponentStatus
