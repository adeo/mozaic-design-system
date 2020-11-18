import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

const McToggle = ({ className, size, label, checked }) => {
  const randomId = Math.floor(Math.random() * 100)

  return (
    <div className={`${className} mc-toggle mc-toggle--${size}`}>
      <input
        className="mc-toggle__input"
        id={`toggleExample${randomId}`}
        defaultChecked={checked}
        type="checkbox"
      />
      <label className="mc-toggle__label" htmlFor={`toggleExample${randomId}`}>
        {label}
      </label>
    </div>
  )
}

McToggle.defaultProps = {
  size: 'm',
  label: 'Medium',
}

McToggle.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
}

export default McToggle
