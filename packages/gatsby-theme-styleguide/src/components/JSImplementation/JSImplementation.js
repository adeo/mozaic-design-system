import React from 'react'
import StatusFlag from '../StatusFlag'
import { DisplayExternalLink16 } from '../icons'
import * as styles from './jsimplementation.module.css'

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
        <span className={styles.statusItem} key={index}>
          <div className={styles.statusText}>
            {value.link !== '' ? (
              <>
                <span className={styles.statusName}>{key}</span>
                <a
                  className={styles.statusLink}
                  target="__blank"
                  href={value.link}
                >
                  <DisplayExternalLink16 fill="#999999" />
                </a>
              </>
            ) : (
              { key }
            )}
          </div>
          {':'}
          <StatusFlag status={value.status} />
        </span>
      )
    })
    .filter((item) => !!item)

  if (!items.length) {
    return false
  }

  return <div className={styles.statusContainer}>{items}</div>
}

export default JSImplementation
