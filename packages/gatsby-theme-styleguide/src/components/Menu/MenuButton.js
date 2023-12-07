import React, { useEffect } from 'react'
import { ControlCross24, DisplayMenu24 } from '../icons'
import * as styles from './menu.module.css'

const MenuButton = () => {
  useEffect(() => {
    const siteAsideEl = document.querySelector('.siteAside')

    function handleScroll(e) {
      const scrollValue = e.currentTarget.scrollTop
      const triggerMenuEl = document.querySelector('.triggerMenu')

      if (scrollValue > 0) {
        triggerMenuEl.classList.add('triggerMenu--hide')
      } else {
        triggerMenuEl.classList.remove('triggerMenu--hide')
      }
    }

    siteAsideEl.addEventListener('scroll', handleScroll)
    return () => siteAsideEl.removeEventListener('scroll', handleScroll)
  }, [])

  function handleClick() {
    if (document.body.classList.contains('navOpen')) {
      document.body.classList.remove('navOpen')
      return false
    }

    document.body.classList.add('navOpen')
  }

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
