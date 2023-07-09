import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { DisplayExternalLink16 } from '../icons'
import MenuList from './MenuList'
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
    <div className={`MenuWrapper ${styles.wrapper}`}>
      {/* Insérer ici le composant MenuHeader */}
      <nav className="navContainer">
        {/* Insérer ici le sous composant MenuItems */}
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

        {/* Insérer ici le composant DesignerKitLink */}
      </nav>
    </div>
  )
}

export default Menu
