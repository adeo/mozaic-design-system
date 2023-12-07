import * as React from 'react'
import { Link } from 'gatsby'
import CurrentVersion from './CurrentVersion'
import Menu from './Menu'
import MenuButton from './Menu/MenuButton'
import Search from './Search'
import VersionSelector from './VersionSelector'
import { LogoMozaic } from './icons'
import './base.scss'
import * as styles from './layout.module.css'

const Layout = (props) => {
  const { children, location } = props

  return (
    <div className={styles.container}>
      <MenuButton />
      <aside className={`siteAside ${styles.aside}`}>
        <div className={styles.asideTop}>
          <Link to="/" className={styles.asideLogo}>
            <LogoMozaic />
          </Link>
          <div className={styles.versionsWrapper}>
            <VersionSelector />
            <CurrentVersion />
          </div>
        </div>
        <Search />
        <Menu location={location} />
      </aside>
      <main id="scroller" className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
