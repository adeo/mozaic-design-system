import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { ArrowArrowBottom16 } from '@mozaic-ds/icons/react'
import MenuVersionSelect from './MenuVersionSelect'
import Search from '../Search/Search'

const Header = styled.div`
  margin-bottom: 3rem;
  position: relative;

  a,
  svg {
    display: block;
  }

  .version-number {
    color: #000;
    font-size: 1rem;
    font-style: italic;

    & > svg {
      display: inline-block;
      margin-left: 0.3125rem;
      position: relative;
      vertical-align: middle;
    }
  }
`

const VersionWrapper = styled.div`
  bottom: 0;
  left: 38%;
  position: absolute;
  right: 0;
`

const getCurrentRelease = (releases) => {
  const currentRelease = releases.find((release) => release.isCurrent === true)

  return !!currentRelease && currentRelease.tagName
    ? currentRelease.tagName
    : null
}

const MenuHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      allGithubRelease(limit: 20) {
        nodes {
          isCurrent
          tagName
          url
        }
      }
    }
  `)

  const releases = data.allGithubRelease.nodes

  return (
    <>
      <Header>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.55 65">
            <path d="M138.89 9.46a10.19 10.19 0 0 1 5.49 1.5 10 10 0 0 1 3.69 4.04 12.34 12.34 0 0 1 1.29 5.67 12.35 12.35 0 0 1-1.31 5.72 9.91 9.91 0 0 1-9.16 5.61 10.39 10.39 0 0 1-5.57-1.5 10 10 0 0 1-3.73-4.08 12.36 12.36 0 0 1-1.32-5.72 12.48 12.48 0 0 1 1.3-5.67 9.87 9.87 0 0 1 3.71-4.03 10.35 10.35 0 0 1 5.61-1.54zm85.48 0a12.83 12.83 0 0 1 4.26.63 8.24 8.24 0 0 1 2.82 1.53l-2.24 4.1a6.07 6.07 0 0 0-4.42-2 5.63 5.63 0 0 0-4.55 1.83 7.34 7.34 0 0 0-1.56 4.9 8.19 8.19 0 0 0 1.61 5.41 5.53 5.53 0 0 0 4.5 1.93 9.69 9.69 0 0 0 2.82-.43 7.3 7.3 0 0 0 2.12-1l1.82 3.52a10.18 10.18 0 0 1-2.87 1.44 12.3 12.3 0 0 1-4.08.63 11.59 11.59 0 0 1-5.71-1.29 10.2 10.2 0 0 1-4-4 12 12 0 0 1-1.49-6.14 12 12 0 0 1 1.37-5.88 9.46 9.46 0 0 1 3.87-3.88 11.8 11.8 0 0 1 5.73-1.3zm-40 0a8.65 8.65 0 0 1 3.4.66 9.37 9.37 0 0 1 2.69 1.62 5.24 5.24 0 0 1 1.45 1.9l.09-3.64h4.64v21.53h-4.55l-.09-3.8a7.11 7.11 0 0 1-2.82 3 8.51 8.51 0 0 1-4.54 1.27 10.17 10.17 0 0 1-9.11-5.33 12.11 12.11 0 0 1-1.44-6 13.47 13.47 0 0 1 1.25-5.87 9.2 9.2 0 0 1 3.57-3.94 10.29 10.29 0 0 1 5.46-1.4zm-64.71 1.29a6.11 6.11 0 0 1 2.23 3.61 28.64 28.64 0 0 1 .56 6.27v10.64h-4.84v-10.69a14 14 0 0 0-.73-5.37 2.83 2.83 0 0 0-2.83-1.62 5 5 0 0 0-4.26 2 8.54 8.54 0 0 0-1.45 5.16v10.52h-4.81v-11.43a27.2 27.2 0 0 0-.18-3.61 3.06 3.06 0 0 0-1-1.9 3.9 3.9 0 0 0-2.58-.69 4.9 4.9 0 0 0-2.92 1 6.84 6.84 0 0 0-2.23 2.62 7.84 7.84 0 0 0-.83 3.54v10.5h-4.79v-21.3h4.81v3.89a7.06 7.06 0 0 1 2.88-3.29 8.51 8.51 0 0 1 4.31-1.13q5.49 0 6.69 3.94a7.07 7.07 0 0 1 2.94-2.87 8.63 8.63 0 0 1 4.14-1.07 7.85 7.85 0 0 1 4.89 1.28zm50.79-.57l-9.4 15.53-1.14 1.75 4.91-.18 5.27-.1v4.09h-17.82l9.5-15.48 1.14-1.66-5.09.14h-3.59v-4.09zm37.91.17v20.92h-5.09v-20.92zm-69.64 3.18a4.79 4.79 0 0 0-4 2.07 8.5 8.5 0 0 0-1.51 5.15 7.79 7.79 0 0 0 1.62 5 5.1 5.1 0 0 0 4.17 2 4.7 4.7 0 0 0 4-2v-.05a8.42 8.42 0 0 0 1.47-5.06 8.33 8.33 0 0 0-1.58-5.13 5 5 0 0 0-4.17-1.98zm42.05 2.15a7.79 7.79 0 0 0-1.59 5.05 7.9 7.9 0 0 0 1.57 5.09 5.45 5.45 0 0 0 4.55 1.95 5.81 5.81 0 0 0 4.43-1.85 6.72 6.72 0 0 0 1.77-4.86v-.33a7.81 7.81 0 0 0-.82-3.62 6.27 6.27 0 0 0-2.27-2.49 5.67 5.67 0 0 0-3.09-.89 5.45 5.45 0 0 0-4.55 1.95zm25-15.68a3.25 3.25 0 0 1 2.23.91 2.91 2.91 0 0 1 1 2.19 3.31 3.31 0 0 1-.93 2.37 3.16 3.16 0 0 1-2.34 1 3.26 3.26 0 0 1-3.27-3.33 2.9 2.9 0 0 1 .95-2.19 3.35 3.35 0 0 1 2.36-.95z" />
            <path d="M65 0v65h-65v-65zm-34 54.68h-27.9v7.22h27.9zm23.84-11.49a7.74 7.74 0 0 0-8.29 6.33 7.92 7.92 0 0 1-12.5 4.55v7.83h27.85v-11.28a7.75 7.75 0 0 0-7.06-7.43zm7.06-9.14h-27.85v13.95a4.76 4.76 0 0 0 4.78 4.64 4.64 4.64 0 0 0 4.72-3.85 9.89 9.89 0 0 1 2.17-4.54 10.93 10.93 0 0 1 16.18-.79zm-30.9 10.32h-27.9v7.21h27.9zm0-10.32h-27.9v7.23h27.9zm30.9-30.95h-27.85v27.9h27.85zm-6.19 3.09l-12.38 21.67h-3.09l12.38-21.67zm-44.88 4.64h-3.09v12.38h3.09v-7a2.33 2.33 0 0 1 4.65 0v7h3.09v-7a2.32 2.32 0 0 1 4.64 0v7h3.1v-7a5.38 5.38 0 0 0-3.1-4.87 5.19 5.19 0 0 0-4.64 0 5.43 5.43 0 0 0-1.57 1.13 5.39 5.39 0 0 0-1.54-1.09 5.21 5.21 0 0 0-4.65 0z" />
          </svg>
        </Link>
        <VersionWrapper>
          <MenuVersionSelect releases={releases} />
          <div className="version-number">
            {getCurrentRelease(releases)}
            <ArrowArrowBottom16 fill="currentColor" />
          </div>
        </VersionWrapper>
      </Header>
      <Search />
    </>
  )
}

export default MenuHeader
