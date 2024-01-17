import React, { useState } from 'react'
import copyToClipboard from '../../utils/copy-to-clipboard'
import * as styles from './inlinecode.module.css'

const InlineCode = (props) => {
  const { children } = props
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    copyToClipboard(children)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
      .catch(() => false)
  }

  /* eslint-disable */
  return (
    <code
      role="button"
      tabIndex={0}
      className={styles.code}
      onClick={handleCopy}
      onKeyDown={handleCopy}
    >
      {children}
      {copied && <span className={styles.copied}>copied</span>}
    </code>
  )
  /* eslint-enable */
}

export default InlineCode
