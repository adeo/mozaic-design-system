import React from 'react'

export default ({ value }) => {
  const flagTypeClass =
    value === 'stable'
      ? 'patternstatusflags__flag-stable'
      : 'patternstatusflags__flag-beta'

  return (
    <span className={'patternstatusflags__flag ' + flagTypeClass}>{value}</span>
  )
}
