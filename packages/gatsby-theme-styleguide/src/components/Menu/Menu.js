import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MenuList from './MenuList'
import { DisplayExternalLink16 } from '../icons'
import * as styles from './menu.module.css'

const Menu = (props) => {
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
    <nav className="navContainer">
      <MenuList location={props.location} />

      <div className={styles.githubLinkContainer}>
        <a
          href={data.site.siteMetadata.githubUrl}
          className={styles.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <DisplayExternalLink16
            fill="#554f52"
            className={styles.githubLinkIcon}
          />
        </a>
      </div>
    </nav>
  )
}

export default Menu
