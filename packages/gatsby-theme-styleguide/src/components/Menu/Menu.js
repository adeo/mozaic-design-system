import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import {
  ControlLess16,
  ControlMore16,
  DisplayExternalLink16,
} from '@mozaic-ds/icons/react'
import withSiteMapData from '../SiteMapData'
import { parseLocation } from '../SiteMapData/tools'
import MenuHeader from './MenuHeader'
import { MenuItem } from './MenuItem'
import DesignerKitLink from '../DesignerKitLink'

const Wrapper = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  padding: 4.5rem 1.5rem 0;

  @media (min-width: 1024px) {
    padding-top: 2.5rem;
  }
`

const GithubLink = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.15;
  padding: 0.8125rem 0 0.75rem;
  color: #000;
  width: 100%;
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
  list-style-type: none;

  ${({ isOpened, level }) =>
    isOpened &&
    level === 1 &&
    css`
      &:not(:last-child) {
        border-bottom: 1px solid #000;
        padding-bottom: 0.625rem;
      }
      & + [class^='Menu__ListItem'] {
        padding-top: 0.5rem;
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
          padding-bottom: 0.5rem;

          & + div {
            padding-top: 0.5rem;
          }
        }
      `
    }
  }}
`

const ShowChildrenButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  height: 1rem;
  outline: none;
  margin-top: -0.5rem;
  padding: 0;
  position: absolute;
  right: 0;
  top: 50%;
  width: 1rem;

  .icon-open {
    display: block;
  }

  .icon-close {
    display: none;
  }

  ${({ isOpened }) => {
    if (isOpened) {
      return css`
        .icon-open {
          display: none;
        }

        .icon-close {
          display: block;
        }
      `
    }
  }}
`

const NavContainer = styled.nav``

// MENU ITEMS
const MenuItems = ({ items, isOpened }) => {
  const [localItems, setLocalItems] = useState(items)

  const handleClick = (dirPath, isOpen) => {
    const updateMenuState = (subMenu) =>
      subMenu.map((item, i) => {
        if (!isOpen && dirPath.includes(item.dirPath)) {
          item.isOpened = true
        }

        if (isOpen && dirPath === item.dirPath) {
          item.isOpened = false
        }

        if (item.content && item.content.length > 0) {
          item.content = updateMenuState(item.content)
        }

        return item
      })

    setLocalItems(updateMenuState(localItems))
  }

  return (
    <UlMenu isOpened={isOpened}>
      {localItems.map((item) => {
        return (
          <ListItem
            key={item.dirPath}
            level={item.level}
            isOpened={item.isOpened}
          >
            <MenuItemContainer
              level={item.level}
              isOpened={item.isOpened}
              onClick={() => handleClick(item.dirPath, item.isOpened)}
            >
              <MenuItem
                to={item.slug}
                title={item.title}
                level={item.level}
                isPartOfCurrentlocation={item.isPartOfCurrentlocation}
                hasChildren={item.content.length > 0}
                tabIndex={isOpened ? 0 : -1}
              />
              {item.content.length > 0 && (
                <ShowChildrenButton isOpened={item.isOpened} tabIndex={-1}>
                  <ControlMore16 className="icon-open" fill="#554f52" />
                  <ControlLess16 className="icon-close" fill="#554f52" />
                </ShowChildrenButton>
              )}
            </MenuItemContainer>
            {item.content.length > 0 && (
              <div>
                <MenuItems items={item.content} isOpened={item.isOpened} />
              </div>
            )}
          </ListItem>
        )
      })}
    </UlMenu>
  )
}

// MENU
const Menu = ({ siteMapData, location }) => {
  const menuItems = parseLocation(siteMapData, location)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          githubUrl
        }
      }
    }
  `)

  return (
    <Wrapper className="MenuWrapper">
      <MenuHeader />
      <NavContainer>
        <MenuItems items={menuItems} isOpened={true} />
        <ListItem>
          <MenuItemContainer>
            <GithubLink href={data.site.siteMetadata.githubUrl} target="_blank">
              GitHub
              <ShowChildrenButton tabIndex={-1}>
                <DisplayExternalLink16 fill="#554f52"></DisplayExternalLink16>
              </ShowChildrenButton>
            </GithubLink>
          </MenuItemContainer>
        </ListItem>
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
  )
}

export default withSiteMapData({ Component: Menu })
