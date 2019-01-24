import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import MenuVersionSelect from './MenuVersionSelect'

const Header = styled.div`
  background: #f5f5f5;
  padding: 30px 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`

const MenuHeader = ({ siteTitle, githubReleases }) => (
  <Header>
    <Link to="/">{siteTitle}</Link>
    <MenuVersionSelect githubReleases={githubReleases} />
  </Header>
)

MenuHeader.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  githubReleases: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        url: PropTypes.string.isRequired,
        tagName: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
}

export default MenuHeader
