import React, { useState } from 'react'
import copyToClipboard from '../../utils/copy-to-clipboard'
import * as styles from './copy.module.css'

const Copy = (props) => {
  const { children } = props
  const [copied, setCopied] = useState(false)

  function copyOnClick() {
    const value = props.value ? props.value : props.children

    copyToClipboard(value)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
      .catch(() => false)
  }

  return (
    <div
      className={styles.info}
      onClick={copyOnClick}
      onKeyDown={copyOnClick}
      role="button"
      tabIndex={0}
    >
      {children}
      {copied && <div className={styles.copied}>copied</div>}
    </div>
  )
}

export default Copy
