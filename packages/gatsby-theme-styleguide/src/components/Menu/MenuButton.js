import * as React from 'react'
import { ControlCross24, DisplayMenu24 } from '../icons'
import * as styles from './menu.module.css'

const MenuButton = () => {
  function handleClick() {
    if (document.body.classList.contains('navOpen')) {
      document.body.classList.remove('navOpen')
      return false
    }

    document.body.classList.add('navOpen')
  }

  // function manageScroll(e) {
  //   const scrollValue = e.currentTarget.scrollTop
  //   if (scrollValue > 0) {
  //     document.querySelector('.triggerMenu').classList.add('triggerMenu--hide')
  //   } else {
  //     document
  //       .querySelector('.triggerMenu')
  //       .classList.remove('triggerMenu--hide')
  //   }
  // }

  // componentDidMount() {
  //   document
  //     .querySelector('.MenuWrapper')
  //     .addEventListener('scroll', this.manageScroll)
  // }

  return (
    <button
      type="button"
      className={`triggerMenu ${styles.triggerMenu}`}
      aria-label="Open/Close Menu"
      onClick={handleClick}
    >
      <DisplayMenu24 className={styles.triggerMenuOpen} fill="currentColor" />
      <ControlCross24 className={styles.triggerMenuClose} fill="currentColor" />
    </button>
  )
}

export default MenuButton
