import { Link } from 'gatsby'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const MenuLink = styled(Link)`
  color: #000;
  flex: 1;
  position: relative;

  ${({ isPartOfCurrentlocation, level }) =>
    isPartOfCurrentlocation &&
    level === 3 &&
    css`
      font-weight: 600;
    `}

  ${({ level }) => {
    if (level === 1) {
      return css`
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1.15;
        padding: 0.8125rem 0 0.75rem;
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
        font-size: 0.875rem;
        padding: 0.4375rem 1rem 0.3125rem 1.5rem;

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

const MenuItem = (props) => {
  function handleClick(e) {
    if (props.hasChildren) e.preventDefault()
  }

  let menuItem

  if (props.to) {
    menuItem = (
      <MenuLink
        to={props.to}
        level={props.level}
        isPartOfCurrentlocation={props.isPartOfCurrentlocation}
        onClick={handleClick}
        tabIndex={props.tabIndex}
      >
        {props.title}
      </MenuLink>
    )
  } else {
    menuItem = <p>{props.title}</p>
  }

  return menuItem
}

export { MenuItem }
