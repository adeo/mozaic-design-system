import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { MenuItem } from './MenuItem'
import MenuHeader from './MenuHeader'
import buildMenuModel from './BuildMenuModel'
import DesignerKitLink from '../DesignerKitLink'

const MenuItemContainer = styled.div`
  display: flex;
`
const ShowChildrenButton = styled.button`
  cursor: pointer;
  flex: initial;
  align-self: flex-end;
  border: none;
  outline: none;
  background: none;
  color: #666;
  font-size: 0.75rem;
`

const Arrow = styled.svg`
  display: inline-block;

  ${({ isOpenned }) =>
    isOpenned &&
    css`
      transform: rotate(-180deg);
    `}
`
const Container = styled.div`
  width: 220px;
  display: flex;
  flex-flow: column nowrap;
  max-height: 100vh;
  overflow: hidden;
`

const NavContainer = styled.nav`
  padding: 0 8px 0 16px;
  flex: 1;
  overflow: auto;
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
  padding-left: 0.5rem;

  ${({ isOpened, level }) =>
    !isOpened &&
    level === 2 &&
    css`
      border-left: 3px solid #f5f5f5;
    `}
`

export default class Menu extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    siteTitle: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    const currentPath =
      (this.props.location && this.props.location.pathname) || ''

    this.state = {
      menuArray: buildMenuModel(
        this.props.data.allMarkdownRemark.edges,
        this.props.data.directoryTree.childrenNode,
        currentPath
      ),
    }
  }

  openMenu = dirPath => {
    const setOpenItems = subMenu =>
      subMenu.map((item, i) => {
        if (dirPath.includes(item.dirPath)) {
          item.isOpened = true
        }

        if (item.children && item.children.length > 0) {
          item.children = setOpenItems(item.children)
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

        if (item.children && item.children.length > 0) {
          item.children = setCloseItem(item.children)
        }

        return item
      })

    this.setState({ menuArray: setCloseItem(this.state.menuArray) })
  }

  buildMenu = (menuArray, isOpened = true) => (
    <UlMenu isOpened={isOpened}>
      {menuArray.map(item => (
        <ListItem
          key={item.dirPath}
          level={item.level}
          isOpenned={item.isOpened}
        >
          <MenuItemContainer>
            <MenuItem
              to={item.slug}
              content={item.title}
              level={item.level}
              isPartOfCurrentlocation={item.isPartOfCurrentlocation}
            />
            {item.children && (
              <ShowChildrenButton
                onClick={
                  item.isOpened
                    ? () => this.closeMenu(item.dirPath)
                    : () => this.openMenu(item.dirPath)
                }
              >
                <Arrow
                  isOpenned={item.isOpened}
                  viewBox="0 0 35.57 35.53"
                  width="20"
                  height="20"
                >
                  <path
                    fill="currentColor"
                    d="M17.66,23.12l-8.5-8.5a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0l7.09,7.09,7.08-7.09a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42Z"
                  />
                </Arrow>
              </ShowChildrenButton>
            )}
          </MenuItemContainer>
          {item.children && (
            <div>{this.buildMenu(item.children, item.isOpened)}</div>
          )}
        </ListItem>
      ))}
    </UlMenu>
  )

  render() {
    const { siteTitle, data } = this.props

    return (
      <Container>
        <MenuHeader
          siteTitle={siteTitle}
          githubReleases={data.allGithubRelease.edges}
        />
        <NavContainer>
          {this.buildMenu(this.state.menuArray, true)}

          <DesignerKitLink
            target="_blank"
            rel="noopener noreferrer"
            className="button__menu button button--secondary"
            title="Download the IU kit"
          >
            Download the design kit
          </DesignerKitLink>
        </NavContainer>
      </Container>
    )
  }
}
