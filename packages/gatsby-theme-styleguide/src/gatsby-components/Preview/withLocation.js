import React from 'react'
import Preview from './Preview'

export default location => {
  return props => <Preview {...props} location={location} />
}
