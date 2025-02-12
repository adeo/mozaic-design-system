import * as React from 'react'
import {
  IconSlack,
  IconGithub,
  IconWorkplace,
} from '../icons'
import * as styles from './header.module.css'

const Header = () => (
  <header className={`HomeHeader ${styles.container}`}>
    <div className={styles.headerTop}>
      <a
        href="https://adeo-tech-community.slack.com/messages/CKQJZL7C4/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Support & OnBoarding on Slack"
      >
        <IconSlack />
      </a>
      <a
        href="https://adeo.workplace.com/groups/427492661454646/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Support & news on Worplace"
      >
        <IconWorkplace />
      </a>
      <a
        href="https://github.com/adeo/mozaic-design-system"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mozaic on GitHub"
      >
        <IconGithub />
      </a>
    </div>
    <div className="ml-flexy ml-flexy--gutter">
      <div
        className={`${styles.headerMain} ml-flexy__col ml-flexy__col--push-1of12@from-xl`}
      >
        <h1 className={styles.headerTitle}>Welcome to ADEO Design System</h1>
        <p className={styles.headerDesc}>
          A global and collaborative design system that facilitates the designer and developer experience, enabling them to create universal interfaces perfectly aligned with the business strategy of Adeo.
        </p>
      </div>
    </div>
  </header>
)

export default Header
