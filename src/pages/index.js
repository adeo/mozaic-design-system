import React from 'react'
import { Link } from 'gatsby'
import './index.scss'

import DesignerKitLink from '@mozaic-ds/gatsby-theme-styleguide/src/gatsby-components/DesignerKitLink'
import Helmet from '@mozaic-ds/gatsby-theme-styleguide/src/gatsby-components/Helmet'

const Tile = ({
  icon,
  center,
  title,
  subtext,
  bottom,
  linktitle,
  text,
  linkurl,
  link,
  children,
}) => (
  <div className="ml-flexy__col section__tile">
    <div className={`${center ? 'tile tile--center' : 'tile'}`}>
      <i
        className={`${center ? 'tile__icon tile__icon--center' : 'tile__icon'}`}
      >
        {icon}
      </i>
      <h3 className="tile__title">{title}</h3>
      <p className="tile__description">{text}</p>
      <p className="tile__description--italic">{subtext}</p>
      <Link
        className={`${bottom ? 'tile__link tile__link--bottom' : 'tile__link'}`}
        to={linkurl}
        title={linktitle}
      >
        {link}
      </Link>
      {children}
    </div>
  </div>
)

const Section = ({ children, title }) => (
  <div className="section">
    <h2 className="section__title ml-flexy__col--11of12@from-m  ml-flexy__col--push-1of12@from-m">
      {title}
    </h2>
    <div className="section__content">{children}</div>
  </div>
)

const Slice = ({ children, dark, large }) => (
  <section className={`${dark ? 'slice--dark' : 'slice'}`}>
    <div
      className={`${large ? 'slice__container--large' : 'slice__container'}`}
    >
      {children}
    </div>
  </section>
)

const Linkicon = ({ children, link }) => (
  <a
    className="help__link-icon"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

const IndexPage = () => (
  <main className="mozaic">
    <Helmet></Helmet>
    <Slice dark large>
      <nav className="help">
        <div className="help__link-list">
          <Link className="help__link" to="/GetStarted">
            Get Started
          </Link>
          <Link className="help__link" to="/Foundations">
            Foundations
          </Link>
          <Link className="help__link" to="/Components">
            Components
          </Link>
        </div>
        <Linkicon link="https://adeo-tech-community.slack.com/messages/CKQJZL7C4/">
          <svg
            className="help__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 270 270"
          >
            <title>Slack icon</title>
            <path
              fill="#e01e5a"
              d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z"
            />
            <path
              fill="#36c5f0"
              d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z"
            />
            <path
              fill="#2eb67d"
              d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z"
            />
            <path
              fill="#ecb22e"
              d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z"
            />
          </svg>
        </Linkicon>
        <Linkicon link="https://github.com/adeo/mozaic-design-system">
          <svg
            className="help__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-9 -9 34 34"
            aria-hidden="true"
          >
            <title>Github icon</title>
            <path
              fill="#ffffff"
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </Linkicon>
      </nav>
    </Slice>
    <Slice dark>
      <header className="section hero">
        <svg
          className="hero__logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 199.97"
        >
          <path d="M190.47 0H.1v95.19H0V200h104.78v-.05H200V0zm0 9.53v85.62h-85.6V9.53zM23.91 50V33.34h9.53V35a16.76 16.76 0 0 1 19.05 3.37A16.68 16.68 0 0 1 81.06 50v21.44h-9.52V50a7.15 7.15 0 1 0-14.29 0v21.44h-9.53V50a7.14 7.14 0 1 0-14.28 0v21.44h-9.53zm71.28 140.4H9.53v-22.18h85.66zm0-47.29v15.59H9.53v-22.23h85.66zM9.53 127v-22.22h85.66V127zm180.91 48.71v14.69h-85.66v-23.69a23.74 23.74 0 0 0 29.93-.47 24.53 24.53 0 0 0 8.48-13.76 23.81 23.81 0 0 1 47.25 4.21zm0-46.62v4.25a33.29 33.29 0 0 0-49.82 2.5A31.36 31.36 0 0 0 134 150c-1.86 7.88-7.53 12.2-14.53 12.18A14.74 14.74 0 0 1 104.78 148v-43.22h85.66z" />
          <path d="M172.36 19.05h-11l-38.5 66.68h11l38.5-66.68z" />
        </svg>
        <h1 className="hero__title">mozaic design system</h1>
        <p className="hero__description">
          A design system to reinforce team’s delivery time, improve quality of
          deliverables and thus help set up a coherent customer experience.
        </p>
        <div className="hero__button">
          <Link
            to="/GetStarted/"
            className="button button--primary hero__button"
            title="Principles, designer and developper guide"
          >
            Getting started
          </Link>
          {'  '}
          <DesignerKitLink
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary hero__button"
            title="Download the IU kit"
          >
            Download the design kit
          </DesignerKitLink>
        </div>
      </header>
    </Slice>
    <Slice large>
      <div className="ml-flexy more--hide">
        <Link to="/#start" className="more__arrow" title="See more" />
      </div>
      <Section title="Get started" id="start">
        <div className="ml-flexy ml-flexy--items-stretch ml-flexy--gutter">
          <Tile
            bottom
            center
            title="Designers"
            text="Learn how to install and use this design system from it’s sketch libraries"
            linkurl="/GetStarted/Designers/"
            linktitle="How to start for designers"
            link="Getting started"
          ></Tile>
          <Tile
            center
            title="Developers"
            text="All guidance needed so you can get it up and running on your project."
            linkurl="/GetStarted/Developers/"
            linktitle="How to start for developpers"
            link="Getting started"
          ></Tile>
        </div>
      </Section>
    </Slice>
    <Slice large>
      <Section title="Design language">
        <div className="ml-flexy ml-flexy--items-stretch ml-flexy--gutter">
          <Tile
            bottom
            center
            title="Foundations"
            text="The base of everything. All items you need to conceive a visual element."
            linkurl="/Foundations/"
            linktitle="Foundations of Mozaic"
            link="Discover"
          ></Tile>
          <Tile
            bottom
            center
            title="Components"
            text="Visual components needed to layout an interaction."
            subtext="(work in progress)"
            linkurl="/Components/"
            linktitle="Components of Mozaic"
            link="Discover"
          ></Tile>
        </div>
      </Section>
    </Slice>
    <Slice large>
      <Section title="Resources" name="start">
        <div className="ml-flexy ml-flexy--items-stretch ml-flexy--gutter">
          <Tile
            title="Design Kit"
            text="The UI Kit is a set of sketch files to be used as libraries."
          >
            <p className="tile__description--italic">
              Please read{' '}
              <Link
                className="tile__link"
                to="/GetStarted/Designers/whatsIncluded/"
              >
                the What’s included ?
              </Link>{' '}
              session before using it.
            </p>
            <div className="tile__button">
              <DesignerKitLink
                target="_blank"
                rel="noopener noreferrer"
                className="button button--neutral"
                title="Download the IU kit"
              >
                Download the design kit
              </DesignerKitLink>
            </div>
          </Tile>
        </div>
      </Section>
    </Slice>
  </main>
)

export default IndexPage
