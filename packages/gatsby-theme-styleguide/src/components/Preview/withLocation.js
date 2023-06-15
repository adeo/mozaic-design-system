import React from 'react'
import Preview from './Preview'

const WithLocation = (location) => {
  return (props) => <Preview {...props} location={location} />
}

export default WithLocation
