import * as React from 'react'
import {
  ColorInfo100,
  ColorInfo500,
  ColorInfo700,
  ColorWarning100,
  ColorWarning500,
  ColorWarning700,
  ColorGrey100,
  ColorGrey500,
  ColorGrey700,
} from '@mozaic-ds/tokens/build/js/tokens'
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
      background = ColorInfo100
      border = ColorInfo500
      color = ColorInfo700
      break
    case 'warning':
      background = ColorWarning100
      border = ColorWarning500
      color = ColorWarning700
      break
    default:
      background = ColorGrey100
      border = ColorGrey500
      color = ColorGrey700
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
