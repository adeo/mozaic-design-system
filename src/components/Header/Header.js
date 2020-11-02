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

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 51px;
  padding-left: 1rem;
  padding-right: 1rem;

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
  padding-top: 24px;
  margin-bottom: 64px;

  a,
  svg {
    height: 32px;
    width: 32px;
  }

  a {
    margin-left: 1rem;
  }
`

const HeaderMain = styled.div`
  margin-bottom: 32px;

  @media (min-width: 1024px) {
    flex: 0 0 calc(((5 / 12) * 100) * 1%);
    max-width: calc(((5 / 12) * 100) * 1%);
    margin-bottom: 0;
  }
`

const HeaderTitle = styled.h1`
  color: #000000;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.175;
  margin-bottom: 24px;
  margin-top: 0;
`

const HeaderDesc = styled.p`
  font-size: 21px;
  line-height: 1.19;
  margin-bottom: 0;
  margin-top: 0;
`

const HeaderAside = styled.div``

const HeaderSubtitle = styled.h2`
  font-weight: normal;
  font-size: 14px;
  line-height: 1.143;
  margin-bottom: 16px;
  margin-top: 0;
`

const StyledMcButton = styled(McButton)`
  margin-bottom: 16px !important;
`

const StyledMcTextInput = styled(McTextInput)`
  margin-bottom: 24px !important;
`

const StyledMcCheckbox = styled(McCheckbox)`
  margin-bottom: 24px !important;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }

  & > * {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`

const Header = () => (
  <HeaderContainer>
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
    </HeaderTop>
    <div className="ml-flexy ml-flexy--gutter">
      <HeaderMain className="ml-flexy__col ml-flexy__col--push-1of12@from-l">
        <HeaderTitle>Welcome to Mozaic Design System</HeaderTitle>
        <HeaderDesc>
          A design system to reinforce team’s delivery time, improve quality of
          deliverables and thus help set up a coherent customer experience.
        </HeaderDesc>
      </HeaderMain>
      <HeaderAside className="ml-flexy__col ml-flexy__col--full ml-flexy__col--1of3@from-l">
        <HeaderSubtitle>Play with Mozaic</HeaderSubtitle>
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
