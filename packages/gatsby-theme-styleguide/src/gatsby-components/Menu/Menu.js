import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { MenuItem } from './MenuItem'
import MenuHeader from './MenuHeader'
import DesignerKitLink from '../DesignerKitLink'
import withSiteMapData from '../SiteMapData'
import { StaticQuery, graphql } from 'gatsby'
import { parseLocation } from '../SiteMapData/tools'
import MenuVersionSelect from './MenuVersionSelect'

const Wrapper = styled.div`
  height: calc(100vh - 6rem);
  overflow-y: auto;
  padding: 2.5rem 1.5rem 0;
`

const UlMenu = styled.ul`
  list-style: none;

  ${({ isOpened }) =>
    !isOpened &&
    css`
      max-height: 0;
      overflow: hidden;
    `}
`

const ListItem = styled.li`
  ${({ isOpened, level }) =>
    isOpened &&
    level === 1 &&
    css`
      &:not(:last-child) {
        border-bottom: 1px solid #000;
        padding-bottom: 1rem;
      }

      & + [class^='Menu__ListItem'] {
        padding-top: 1rem;
      }
    `}
`

const MenuItemContainer = styled.div`
  display: flex;
  position: relative;

  ${({ isOpened, level }) => {
    if (isOpened && level === 1) {
      return css`
        &:not(:only-child) {
          border-bottom: 1px solid black;

          & + div {
            padding-top: 1.188rem;
          }
        }
      `
    }
  }}
`

const ShowChildrenButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 2px;
  height: 0.75rem;
  width: 0.75rem;
  top: 50%;
  margin-top: -0.375rem;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    background: #554f52;
  }

  &::after {
    height: 2px;
    width: 0.75rem;
    left: 0;
    top: 50%;
    margin-top: -1px;
  }

  &::before {
    height: 0.75rem;
    width: 2px;
    top: 50%;
    margin-top: -0.375rem;
    left: 0.312rem;
  }

  ${({ isOpened }) => {
    if (isOpened) {
      return css`
        &::before {
          display: none;
        }
      `
    }
  }}
`

const NavContainer = styled.nav``

class Menu extends Component {
  static propTypes = {
    siteTitle: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      menuArray: parseLocation(this.props.siteMapData, this.props.location),
    }
  }

  openMenu = dirPath => {
    const setOpenItems = subMenu =>
      subMenu.map((item, i) => {
        if (dirPath.includes(item.dirPath)) {
          item.isOpened = true
        }

        if (item.content && item.content.length > 0) {
          item.content = setOpenItems(item.content)
        }

        return item
      })

    this.setState({ menuArray: setOpenItems(this.state.menuArray) })
  }

  closeMenu = dirPath => {
    const setCloseItem = subMenu =>
      subMenu.map((item, i) => {
        if (dirPath === item.dirPath) {
          item.isOpened = false
        }

        if (item.content && item.content.length > 0) {
          item.content = setCloseItem(item.content)
        }

        return item
      })

    this.setState({ menuArray: setCloseItem(this.state.menuArray) })
  }

  buildMenu = (menuArray, isOpened = true) => (
    <UlMenu isOpened={isOpened}>
      {menuArray.map(item => {
        return (
          <ListItem
            key={item.dirPath}
            level={item.level}
            isOpened={item.isOpened}
          >
            <MenuItemContainer level={item.level} isOpened={item.isOpened}>
              <MenuItem
                to={item.slug}
                content={item.title}
                level={item.level}
                isPartOfCurrentlocation={item.isPartOfCurrentlocation}
              />
              {item.content.length > 0 && (
                <ShowChildrenButton
                  isOpened={item.isOpened}
                  onClick={
                    item.isOpened
                      ? () => this.closeMenu(item.dirPath)
                      : () => this.openMenu(item.dirPath)
                  }
                >
                  &nbsp;
                </ShowChildrenButton>
              )}
            </MenuItemContainer>
            {item.content.length > 0 && (
              <div>{this.buildMenu(item.content, item.isOpened)}</div>
            )}
          </ListItem>
        )
      })}
    </UlMenu>
  )

  render() {
    const { siteTitle } = this.props

    return (
      <StaticQuery
        query={query}
        render={data => {
          return (
            <React.Fragment>
              <Wrapper>
                <MenuHeader
                  siteTitle={siteTitle}
                  githubReleases={data.allGithubRelease.edges}
                />
                <NavContainer>
                  {this.buildMenu(this.state.menuArray, true)}

                  <DesignerKitLink
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary button__menu"
                    title="Download the IU kit"
                  >
                    Download the design kit
                  </DesignerKitLink>
                </NavContainer>
              </Wrapper>
              <MenuVersionSelect githubReleases={data.allGithubRelease.edges} />
            </React.Fragment>
          )
        }}
      />
    )
  }
}

export default withSiteMapData({ Component: Menu })

const query = graphql`
  query AllGitReleasesQuery {
    allGithubRelease {
      edges {
        node {
          tagName
          url
          isCurrent
        }
      }
    }
  }
`
