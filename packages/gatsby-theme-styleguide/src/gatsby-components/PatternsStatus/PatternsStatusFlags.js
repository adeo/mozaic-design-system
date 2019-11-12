import React from 'react'
import PatternStatusFlagBox from './PatternStatusFlagBox'

import './patternsstatusflags.scss'

/*
  ##### Pattern Status aka SANITY/READINESS/STABILITY Flags #####
*/

const PatternsStatusFlags = props => {
  if (!props || !props.status) {
    return false
  }
  const { status } = props

  const items = Object.entries(status).map((statuses, index) => {
    let [key, value] = statuses
    if (key === 'scss') {
      key = key.toUpperCase()
    }

    return (
      <p key={index} className="patternstatusflags__item">
        {key} <PatternStatusFlagBox value={value} />
      </p>
    )
  })

  if (!items.length) {
    return false
  }

  return <div className="patternstatusflags">{items}</div>
}

export default PatternsStatusFlags
