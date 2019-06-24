import React from 'react'
import { Link } from 'gatsby'
import './index.scss'

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
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </Linkicon>
      </nav>
    </Slice>
    <Slice dark>
      <header className="section hero">
        <h1 className="hero__title">Mozaic design system</h1>
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
          <a
            href="https://github.com/adeo/design-system--styleguide/releases/download/v1.0.1-alpha.10/designer-kit.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary hero__button"
            title="Download the IU kit"
          >
            Download the design kit
          </a>
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
      <Section title="Ressources" name="start">
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
              <a
                href="https://github.com/adeo/design-system--styleguide/releases/download/v1.0.1-alpha.10/designer-kit.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--secondary"
                title="Download the IU kit"
              >
                Download the design kit
              </a>
            </div>
          </Tile>
        </div>
      </Section>
    </Slice>
  </main>
)

export default IndexPage
