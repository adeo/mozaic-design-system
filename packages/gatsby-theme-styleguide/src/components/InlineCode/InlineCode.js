import React, { useState } from 'react'
import copyToClipboard from '../../utils/copy-to-clipboard'
import * as styles from './inlinecode.module.css'

const InlineCode = (props) => {
  const { children } = props
  const [copied, setCopied] = useState(false)

  function copyOnClick() {
    copyToClipboard(props.children)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
      .catch(() => false)
  }

  return (
    <code
      className={styles.code}
      onClick={copyOnClick}
      onKeyDown={copyOnClick}
      role="button"
    >
      {children}
      {copied && <span className={styles.copied}>copied</span>}
    </code>
  )
}

export default InlineCode
