import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LabelVersion = styled.label`
  font-size: 0.5rem;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 0.1em;
  margin-right: 5px;
`

class MenuVersionRelease extends Component {
  handleChange = event => {
    window.location.href = event.target.value
  }

  static propTypes = {
    githubReleases: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          url: PropTypes.string.isRequired,
          tagName: PropTypes.string.isRequired,
          isCurrent: PropTypes.bool.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }

  render() {
    const githubReleases = [...this.props.githubReleases].reverse()

    return (
      <div>
        <LabelVersion>older tags:</LabelVersion>
        <select onChange={this.handleChange}>
          {githubReleases.reverse().map(release => (
            <option
              key={release.node.tagName}
              value={release.node.url}
              selected={release.node.isCurrent}
            >
              {release.node.tagName}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

export default MenuVersionRelease
