import {
  House32,
  PartnerWorker32,
  Premium32,
  ToolBox32,
} from '@mozaic-ds/icons/react'
import React from 'react'
import styled from 'styled-components'
import McButton from '../McButton'
import McCheckbox from '../McCheckbox'
import McTextInput from '../McTextInput'
import McToggle from '../McToggle'
import MenuButton from '../../gatsby-components/Menu/MenuButton'

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 51px;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;

  @media (min-width: 680px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1280px) {
    padding-bottom: 83px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
  margin-bottom: 4rem;

  a,
  svg {
    height: 2rem;
    width: 2rem;
  }

  a {
    margin-left: 1rem;
  }
`

const HeaderMain = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    flex: 0 0 calc(((5 / 12) * 100) * 1%);
    max-width: calc(((5 / 12) * 100) * 1%);
    margin-bottom: 0;
  }
`

const HeaderTitle = styled.h1`
  color: #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.175;
  margin-bottom: 1.5rem;
  margin-top: 0;
`

const HeaderDesc = styled.p`
  font-size: 1.3125rem;
  line-height: 1.19;
  margin-bottom: 0;
  margin-top: 0;
`

const HeaderAside = styled.div``

const HeaderSubtitle = styled.h2`
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.143;
  margin-bottom: 1rem;
  margin-top: 0;
`

const StyledMcButton = styled(McButton)`
  margin-bottom: 1rem !important;
`

const StyledMcTextInput = styled(McTextInput)`
  margin-bottom: 1.5rem !important;
`

const StyledMcCheckbox = styled(McCheckbox)`
  margin-bottom: 1.5rem !important;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  & > * {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <MenuButton />
    <HeaderTop>
      <a
        href="https://adeo-tech-community.slack.com/messages/CKQJZL7C4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>Slack</title>
          <path d="M7,20.11a3.28,3.28,0,1,1-3.31-3.25H7Z" fill="#e01e5a" />
          <path
            d="M8.62,20.11a3.28,3.28,0,1,1,6.56,0h0v8.21a3.28,3.28,0,1,1-6.55.36,2.16,2.16,0,0,1,0-.36Z"
            fill="#e01e5a"
          />
          <path d="M11.89,7a3.28,3.28,0,1,1,3.29-3.28V7Z" fill="#36c5f0" />
          <path
            d="M11.89,8.62a3.28,3.28,0,1,1,.36,6.55H3.68a3.28,3.28,0,1,1-.36-6.55h8.57Z"
            fill="#36c5f0"
          />
          <path d="M25,11.89a3.28,3.28,0,1,1,3.31,3.29H25Z" fill="#2eb67d" />
          <path
            d="M23.41,11.89a3.28,3.28,0,1,1-6.55.36,2.16,2.16,0,0,1,0-.36V3.68a3.28,3.28,0,1,1,6.55-.36,2.16,2.16,0,0,1,0,.36Z"
            fill="#2eb67d"
          />
          <path d="M20.11,25a3.28,3.28,0,1,1-3.28,3.28h0V25Z" fill="#ecb22e" />
          <path
            d="M20.11,23.41a3.28,3.28,0,1,1-.36-6.55h8.57a3.28,3.28,0,1,1,.36,6.55,2.16,2.16,0,0,1-.36,0Z"
            fill="#ecb22e"
          />
        </svg>
      </a>
      <a
        href="https://github.com/adeo/mozaic-design-system"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>Github icon</title>
          <path
            d="M16.05.38A16,16,0,0,0,11,31.48c.81.14,1.09-.36,1.09-.78V28c-4.46,1-5.4-2.15-5.4-2.15A4.27,4.27,0,0,0,4.92,23.5c-1.44-1,.12-1,.12-1a3.38,3.38,0,0,1,2.44,1.65,3.41,3.41,0,0,0,4.63,1.34h0a3.36,3.36,0,0,1,1-2.13C9.55,23,5.83,21.59,5.83,15.53a6.17,6.17,0,0,1,1.64-4.28A5.8,5.8,0,0,1,7.62,7S9,6.6,12,8.66a15.25,15.25,0,0,1,8,0C23.05,6.6,24.38,7,24.38,7a5.78,5.78,0,0,1,.2,4.19,6.16,6.16,0,0,1,1.63,4.28c0,6.13-3.73,7.47-7.28,7.84A3.75,3.75,0,0,1,20,26.27v4.38c0,.52.29.92,1.1.78a16,16,0,0,0-5.06-31"
            fill="#221e1b"
          />
        </svg>
      </a>
      <a
        href="https://adeo.github.io/mozaic-vue/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
          <title>Vue.js</title>
          <path
            d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z"
            fill="#41b883"
          />
          <path
            d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z"
            fill="#34495e"
          />
        </svg>
      </a>
      <a
        href="https://adeo.github.io/mozaic-react/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <title>React.js</title>
          <path
            fill="#61dafb"
            d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16 481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32 434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75 502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39 501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2 477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94 481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52Z"
          />
          <path
            fill="#61dafb"
            d="M256 298.55a43 43 0 1 0-42.86-43 42.91 42.91 0 0 0 42.86 43Z"
          />
        </svg>
      </a>
    </HeaderTop>
    <div className="ml-flexy ml-flexy--gutter">
      <HeaderMain className="ml-flexy__col ml-flexy__col--push-1of12@from-xl">
        <HeaderTitle>Welcome to Mozaic Design System</HeaderTitle>
        <HeaderDesc>
          A design system to reinforce team’s delivery time, improve quality of
          deliverables and thus help set up a coherent customer experience.
        </HeaderDesc>
      </HeaderMain>
      <HeaderAside className="ml-flexy__col ml-flexy__col--full ml-flexy__col--push-1of12@from-xl ml-flexy__col--1of3@from-xl">
        <HeaderSubtitle>
          Play with Mozaic{' '}
          <span role="img" aria-label="Play with Mozaic">
            👇
          </span>
        </HeaderSubtitle>
        <div className="header__playground">
          <StyledMcButton label="Button label" />
          <StyledMcTextInput />
          <StyledMcCheckbox label="Checkbox Label" />
          <HeaderWrapper>
            <McToggle size="s" label="Small" />
            <McToggle checked />
          </HeaderWrapper>
          <HeaderWrapper>
            <Premium32 />
            <PartnerWorker32 />
            <House32 />
            <ToolBox32 />
          </HeaderWrapper>
        </div>
      </HeaderAside>
    </div>
  </HeaderContainer>
)

export default Header
