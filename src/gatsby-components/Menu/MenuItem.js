import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const MenuLink = styled(Link)`
  flex: 1;
  display: block;
  margin: 6px 0;
  color: #4682b4;

  &:hover {
    text-decoration: underline;
  }

  ${({ isPartOfCurrentlocation }) =>
    isPartOfCurrentlocation &&
    css`
      font-weight: 600;
    `}

  ${({ level }) => {
    if (level === 1) {
      return css`
        font-size: 1.125rem;
      `
    }

    if (level === 2) {
      return css`
        font-size: 1rem;
        color: #666;
      `
    }

    if (level === 3) {
      return css`
        font-size: 0.875rem;
        color: #666;
      `
    }
  }}
`

const MenuItem = ({ to, content, level, isPartOfCurrentlocation }) =>
  to ? (
    <MenuLink
      to={to}
      level={level}
      isPartOfCurrentlocation={isPartOfCurrentlocation}
    >
      {content}
    </MenuLink>
  ) : (
    <p>{content}</p>
  )

MenuItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  isPartOfCurrentlocation: PropTypes.bool,
}

export { MenuItem }
