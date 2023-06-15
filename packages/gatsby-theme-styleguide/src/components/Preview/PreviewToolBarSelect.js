import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectViewport extends Component {
  handleChange = (event) => {
    this.props.changeViewPort(event.target.value)
  }

  static propTypes = {
    viewPorts: PropTypes.shape({}).isRequired,
    viewport: PropTypes.string,
    changeViewPort: PropTypes.func.isRequired,
  }

  render() {
    const { viewPorts, viewport } = this.props

    return (
      <select onChange={this.handleChange}>
        <option default={viewport === null} value="auto">
          auto
        </option>
        {Object.keys(viewPorts).map((viewportItem) => (
          <option
            key={viewportItem}
            default={viewportItem === viewport}
            value={viewPorts[viewportItem].value}
          >
            {viewportItem}
          </option>
        ))}
      </select>
    )
  }
}

export default SelectViewport
