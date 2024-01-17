import * as React from 'react'
import { Link } from 'gatsby'
import { setSlugify } from '../../utils'
import * as styles from './tabs.module.css'

const PageTabs = (props) => {
  const { tabs } = props

  return (
    <div id="pageTabs" className={styles.container}>
      <div className={styles.wrapper}>
        {tabs.map((node) => {
          const slug = setSlugify(node.slug)
          const { title } = node

          return (
            <div className={styles.tabItem} key={slug}>
              <Link
                to={slug}
                className={styles.tabLink}
                activeClassName={styles.isActive}
              >
                {title}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PageTabs
