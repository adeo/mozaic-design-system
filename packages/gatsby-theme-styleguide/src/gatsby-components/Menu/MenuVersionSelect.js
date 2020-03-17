import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SelectContainer = styled.div`
  background: #222020;
  bottom: 0;
  left: 0;
  padding: 2rem 1.5rem;
  position: absolute;
  width: 100%;

  select {
    display: block;
    border: none;
    border-radius: 0.25rem;
    background: #fff;
    width: 100%;
    font-size: 100%;
    padding: 0.312rem 1.125rem 0.375rem 0.25rem;
  }
`

const LabelVersion = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

class MenuVersionRelease extends Component {
  handleChange = event => {
    if (event.target.value !== 'default')
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
      <SelectContainer>
        <LabelVersion>older tags:</LabelVersion>
        <select defaultValue="default" onChange={this.handleChange}>
          <option key="default" value="default">
            Choose version
          </option>
          <option key="latest" value="https://mozaic.adeo.cloud/">
            latest release
          </option>
          {githubReleases.reverse().map(release => (
            <option key={release.node.tagName} value={release.node.url}>
              {release.node.tagName}
            </option>
          ))}
        </select>
      </SelectContainer>
    )
  }
}

export default MenuVersionRelease
