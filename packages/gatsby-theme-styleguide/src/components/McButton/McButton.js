import * as React from 'react'
import './styles.scss'

const McButton = ({ className, label }) => {
  return (
    <button type="button" className={`${className} mc-button`}>
      <span className="mc-button__label">{label}</span>
    </button>
  )
}

export default McButton
