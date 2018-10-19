import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MenuLink = styled(Link)`
  flex: 1;
  display: block;
  padding: 6px 15px;
`

const MenuItem = ({ to, content }) => <MenuLink to={to}>{content}</MenuLink>

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default MenuItem
