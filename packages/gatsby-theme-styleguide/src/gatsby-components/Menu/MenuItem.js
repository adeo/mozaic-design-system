import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const MenuLink = styled(Link)`
  color: #000;
  flex: 1;
  position: relative;

  ${({ isPartOfCurrentlocation }) =>
    isPartOfCurrentlocation &&
    css`
      font-weight: 600;
    `}

  ${({ level }) => {
    if (level === 1) {
      return css`
        font-size: 1.25rem;
        font-weight: bold;
        padding: 0.625rem 0 0.5625rem;
      `
    }

    if (level === 2) {
      return css`
        font-size: 1rem;
        padding: 0.5625rem 0 0.5rem;

        &:focus,
        &:hover {
          font-weight: bold;
        }
      `
    }

    if (level === 3) {
      return css`
        font-size: 0.875;
        padding: 0.25rem 1rem 0.3125rem 1.5rem;

        &:active,
        &:focus,
        &:hover {
          background: #fff;
        }
      `
    }
  }}
  
  ${({ isPartOfCurrentlocation, level }) =>
    isPartOfCurrentlocation &&
    level === 3 &&
    css`
      background: #fff;
    `}
`

class MenuItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let menuItem
    if (this.props.to) {
      menuItem = (
        <MenuLink
          to={this.props.to}
          level={this.props.level}
          isPartOfCurrentlocation={this.props.isPartOfCurrentlocation}
          onClick={e => this.handleClick(this.props.hasChildren, e)}
        >
          {this.props.content}
        </MenuLink>
      )
    } else {
      menuItem = <p>{this.props.content}</p>
    }

    return menuItem
  }

  handleClick = (hasChildren, e) => {
    if (hasChildren) e.preventDefault()
  }
}

MenuItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  isPartOfCurrentlocation: PropTypes.bool,
  hasChildren: PropTypes.bool,
}

export { MenuItem }
