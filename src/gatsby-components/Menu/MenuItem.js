import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const MenuLink = styled(Link)`
  flex: 1;
  display: block;
  padding: 6px 19px;
  color: #4682b4;
  &:hover{
    text-decoration: underline
  }
  
  ${({level}) => {
    if (level === 1) { return css`
      font-size: 1rem;
    `}
    if(level === 2){ return css`
      font-size: 0.875rem;
      color: #666;
    `}
    if(level === 3){ return css`
      font-size: 0.75rem;
      color: #666;
      padding: 6px 29px;
    `}
  }}
`

const activeStyles = {
  fontWeight: '600'
}

const MenuItem = ({ to, content, level }) =>
  to ? <MenuLink activeStyle={activeStyles} to={to} level={level}>{level === 3 ? '-' : ''}{content}</MenuLink> : <p>{content}</p>

MenuItem.propTypes = {
  to: PropTypes.string,
  content: PropTypes.string.isRequired,
  level : PropTypes.number.isRequired,
}


export {MenuItem};
