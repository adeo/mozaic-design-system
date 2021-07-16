import { ControlCross24, DisplayMenu24 } from '@mozaic-ds/icons/react'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const TriggerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 1.5rem;
  padding: 0;
  position: absolute;
  left: 1rem;
  top: 1.5rem;
  transition: left 0.4s;
  width: 1.5rem;
  z-index: 2000;

  @media screen and (min-width: 1024px) {
    display: none;
  }

  .nav-open & {
    left: 1.5rem;
  }

  .triggerMenu {
    &__open {
      display: block;

      .nav-open & {
        display: none;
      }
    }

    &__close {
      display: none;

      .nav-open & {
        display: block;
      }
    }
  }

  &.triggerMenu--hide {
    display: none;
  }
`

export default class MenuButton extends PureComponent {
  handleMenu = () => {
    if (document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open')
      return false
    }

    document.body.classList.add('nav-open')
  }

  manageScroll = (e) => {
    const scrollValue = e.currentTarget.scrollTop
    if (scrollValue > 0) {
      document.querySelector('.triggerMenu').classList.add('triggerMenu--hide')
    } else {
      document
        .querySelector('.triggerMenu')
        .classList.remove('triggerMenu--hide')
    }
  }

  componentDidMount() {
    document
      .querySelector('.MenuWrapper')
      .addEventListener('scroll', this.manageScroll)
  }

  render() {
    return (
      <TriggerButton
        className="triggerMenu"
        type="button"
        title="Open Menu"
        onClick={this.handleMenu}
      >
        <DisplayMenu24 className="triggerMenu__open" fill="currentColor" />
        <ControlCross24 className="triggerMenu__close" fill="currentColor" />
      </TriggerButton>
    )
  }
}
