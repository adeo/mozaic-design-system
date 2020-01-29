import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Search from '../Search/Search'
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

const filterCurrentRelease = githubReleases =>
  githubReleases.filter(release => release.node.isCurrent === true)

const getCurrentRelease = githubReleases => {
  const filtereredGithubReleases = filterCurrentRelease(githubReleases)
  return filtereredGithubReleases.length > 0 &&
    filtereredGithubReleases[0].node &&
    filtereredGithubReleases[0].node.tagName
    ? filtereredGithubReleases[0].node.tagName
    : null
}

const MenuHeader = ({ siteTitle, githubReleases }) => (
  <Header>
    <Search />
    <Link to="/">{siteTitle}</Link>{' '}
    <small>{getCurrentRelease(githubReleases)}</small>
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
        isCurrent: PropTypes.bool.isRequired,
      }).isRequired,
    })
  ).isRequired,
}

export default MenuHeader
