import React from 'react'
import './styles.scss'

const McTextInput = ({ className }) => {
  return (
    <input
      type="text"
      className={`${className} mc-text-input`}
      placeholder="Hover"
      name="inputExample"
    />
  )
}

export default McTextInput
