import * as React from 'react'
import './styles.scss'

const McTextInput = ({ className }) => {
  return (
    <input
      type="text"
      className={`${className} mc-text-input`}
      placeholder="Placeholder"
      name="inputExample"
    />
  )
}

export default McTextInput
