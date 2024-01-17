import * as React from 'react'
import * as styles from './highlight.module.css'

const defaultTitles = {
  info: 'Information',
  tips: 'Useful tip',
  warning: 'Warning',
}

const getStyles = (type) => {
  let background, border, color

  switch (type) {
    case 'tips':
      background = '#daeff7' // ColorInfo100
      border = '#0b96cc' // ColorInfo500
      color = '#005c91' // ColorInfo700
      break
    case 'warning':
      background = '#fdf1e8' // ColorWarning100
      border = '#ea7315' // ColorWarning500
      color = '#8c3500' // ColorWarning700
      break
    default:
      background = '#e6e6e6' // ColorGrey100
      border = '#808080' // ColorGrey500
      color = '#4d4d4d' // ColorGrey700
  }

  return {
    '--background': background,
    '--border': border,
    '--color': color,
  }
}

const Highlight = ({ children, type = 'info', title }) => (
  <div className={styles.container} style={getStyles(type)}>
    <div className={styles.title}>{title ?? defaultTitles[type]}</div>
    <div className={styles.content}>{children}</div>
  </div>
)

export default Highlight
