import * as React from 'react'
import * as styles from './hint.module.css'

const getStyles = (dont) => {
  const border = dont ? 'FireBrick' : 'ForestGreen'
  const color = dont ? 'FireBrick' : 'ForestGreen'

  return {
    '--border': border,
    '--color': color,
  }
}

const HintBox = ({ children, type }) => {
  const dont = type === 'dont' ? true : false

  return (
    <div className={styles.hintBox} style={getStyles(dont)}>
      {children}
    </div>
  )
}

const Hint = ({ title, children, contentType = 'text', type = 'do' }) => {
  const dont = type === 'dont' ? true : false

  return (
    <div className={styles.container}>
      {contentType === 'text' && <HintBox type={type}>{children}</HintBox>}

      {contentType === ('css' || 'javascript' || 'html') && (
        <HintBox type={type} data-language={contentType}>
          <pre className={`language-${contentType} gatsby-highlight`}>
            <code className={`language-${contentType}`}>{children}</code>
          </pre>
        </HintBox>
      )}

      <h4 className={styles.hintTitle} style={getStyles(dont)}>
        {title}
      </h4>
    </div>
  )
}

export default Hint

export const HintItem = ({ children, dont }) => (
  <div
    className={styles.hintItem}
    data-dont={dont ? 'true' : 'false'}
    style={getStyles(dont)}
  >
    {children}
  </div>
)
