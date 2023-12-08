import * as React from 'react'
import McButton from '../McButton'
import McCheckbox from '../McCheckbox'
import McTextInput from '../McTextInput'
import McToggle from '../McToggle'
import MenuButton from '../../components/Menu/MenuButton'
import {
  IconSlack,
  IconGithub,
  IconVue,
  IconReact,
  House32,
  PartnerWorker32,
  Premium32,
  ToolBox32,
} from '../icons'
import * as styles from './header.module.css'

const Header = () => (
  <header className={`HomeHeader ${styles.container}`}>
    <MenuButton />
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
        href="https://github.com/adeo/mozaic-design-system"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mozaic on GitHub"
      >
        <IconGithub />
      </a>
      <a
        href="https://adeo.github.io/mozaic-vue/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mozaic-Vue the Vue.js implementation of Mozaic Design System"
      >
        <IconVue />
      </a>
      <a
        href="https://adeo.github.io/mozaic-react/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mozaic-React the React implementation of Mozaic Design System"
      >
        <IconReact />
      </a>
    </div>
    <div className="ml-flexy ml-flexy--gutter">
      <div
        className={`${styles.headerMain} ml-flexy__col ml-flexy__col--push-1of12@from-xl`}
      >
        <h1 className={styles.headerTitle}>Welcome to Mozaic Design System</h1>
        <p className={styles.headerDesc}>
          A design system to reinforce team's delivery time, improve quality of
          deliverables and thus help set up a coherent customer experience.
        </p>
      </div>
      <div className="headerAside ml-flexy__col ml-flexy__col--full ml-flexy__col--push-1of12@from-xl ml-flexy__col--1of3@from-xl">
        <h2 className={styles.headerSubtitle}>
          Play with Mozaic{' '}
          <span role="img" aria-label="Play with Mozaic">
            👇
          </span>
        </h2>
        <div className={styles.headerPlayground}>
          <McButton label="Button label" />
          <McTextInput />
          <McCheckbox label="Checkbox Label" />
          <div className={styles.headerWrapper}>
            <McToggle size="s" label="Small" />
            <McToggle checked />
          </div>
          <div className={styles.headerWrapper}>
            <Premium32 />
            <PartnerWorker32 />
            <House32 />
            <ToolBox32 />
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
