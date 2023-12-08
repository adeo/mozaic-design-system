import * as React from 'react'
import './styles.scss'

const McCheckbox = ({ className, label }) => {
  return (
    <div className={`${className} mc-checkbox`}>
      <input
        id="checkbox-01"
        type="checkbox"
        className="mc-checkbox__input"
        name="checkboxExample"
      />
      <label htmlFor="checkbox-01" className="mc-checkbox__label">
        {label}
      </label>
    </div>
  )
}

export default McCheckbox
