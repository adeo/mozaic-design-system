import React from 'react'
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
        font-weight: 600;
        padding: 0.375rem 0 0.562rem;
      `
    }

    if (level === 2) {
      return css`
        font-size: 1.25rem;
        padding: 0.125rem 0 0.312rem;
      `
    }

    if (level === 3) {
      return css`
        font-size: 1rem;
        padding: 0.375rem 1.5rem;

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
