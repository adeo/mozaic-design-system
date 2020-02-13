import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import illustration from './homepage-illustration.png'
import leroyMerlin from './Leroy_Merlin.jpg'
import adeo from './Adeo_logo.jpg'
import './index.scss'

// --------- COMMON

const Global = styled.main`
  position: relative;
`

const Container = styled.div`
  max-width: 71rem;
  margin: 0 auto;
  padding: 0 2rem;
`

// --------- SOCIAL
const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #fff;
  padding-top: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
  }
`

const Social = () => (
  <Container>
    <SocialWrapper>
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
        <svg
          className="help__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <title>Github icon</title>
          <path
            d="M16.05.38A16,16,0,0,0,11,31.48c.81.14,1.09-.36,1.09-.78V28c-4.46,1-5.4-2.15-5.4-2.15A4.27,4.27,0,0,0,4.92,23.5c-1.44-1,.12-1,.12-1a3.38,3.38,0,0,1,2.44,1.65,3.41,3.41,0,0,0,4.63,1.34h0a3.36,3.36,0,0,1,1-2.13C9.55,23,5.83,21.59,5.83,15.53a6.17,6.17,0,0,1,1.64-4.28A5.8,5.8,0,0,1,7.62,7S9,6.6,12,8.66a15.25,15.25,0,0,1,8,0C23.05,6.6,24.38,7,24.38,7a5.78,5.78,0,0,1,.2,4.19,6.16,6.16,0,0,1,1.63,4.28c0,6.13-3.73,7.47-7.28,7.84A3.75,3.75,0,0,1,20,26.27v4.38c0,.52.29.92,1.1.78a16,16,0,0,0-5.06-31"
            fill="#221e1b"
          />
        </svg>
      </a>
    </SocialWrapper>
  </Container>
)

// --------- JUMBO

const Logo = styled.svg`
  display: block;
  max-width: 22.125rem;
  width: 100%;
  height: auto;
  margin-right: 2rem;
`

const Jumbo = styled.header`
  padding-top: 2rem;
  padding-bottom: 3.5rem;
`

const Version = styled.div`
  color: rgb(120, 190, 32);
  font-size: 24px;
  line-height: 1;
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 2rem;
`
const SubTitle = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`

const Jumbotron = ({ release }) => (
  <Jumbo>
    <Container>
      <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 354 80">
        <path d="M332,55.66a16.56,16.56,0,0,1-6.59-6.48A19.39,19.39,0,0,1,323,39.24a19.28,19.28,0,0,1,2.25-9.53,15.36,15.36,0,0,1,6.32-6.28A19.54,19.54,0,0,1,341,21.26a21.31,21.31,0,0,1,7,1,13.71,13.71,0,0,1,4.61,2.47L349,31.36a10,10,0,0,0-7.24-3.2,9.24,9.24,0,0,0-7.43,3,11.72,11.72,0,0,0-2.55,7.93,13.13,13.13,0,0,0,2.63,8.76A9.06,9.06,0,0,0,341.64,51a16,16,0,0,0,4.61-.68,11.71,11.71,0,0,0,3.46-1.6l3,5.71A16.59,16.59,0,0,1,348,56.72a20.41,20.41,0,0,1-6.67,1A19.24,19.24,0,0,1,332,55.66Z" />
        <path d="M305.3,14a5.35,5.35,0,0,1-1.6-4,4.82,4.82,0,0,1,1.6-3.66,5.56,5.56,0,0,1,4-1.52,5.41,5.41,0,0,1,3.81,1.52,4.91,4.91,0,0,1,1.6,3.66,5.47,5.47,0,0,1-1.57,4,5.25,5.25,0,0,1-3.92,1.6A5.34,5.34,0,0,1,305.3,14Zm-.23,8.15h8.53v35h-8.53Z" />
        <path d="M264.34,55.66a17.1,17.1,0,0,1-6.4-6.4,19.08,19.08,0,0,1-2.4-9.72,20.91,20.91,0,0,1,2.1-9.52,15.18,15.18,0,0,1,6-6.4,17.6,17.6,0,0,1,9.14-2.29,15.33,15.33,0,0,1,5.72,1.07A15.82,15.82,0,0,1,283,25a8.52,8.52,0,0,1,2.44,3.08l.15-5.86h7.77V57.14h-7.62L285.56,51a11.59,11.59,0,0,1-4.72,4.84,14.52,14.52,0,0,1-7.62,2.09,17.46,17.46,0,0,1-8.88-2.24ZM281.75,48a10.71,10.71,0,0,0,3-7.89v-.53a12.22,12.22,0,0,0-1.37-5.87,10.31,10.31,0,0,0-3.81-4,9.67,9.67,0,0,0-5.18-1.44,9.27,9.27,0,0,0-7.62,3.16,12.32,12.32,0,0,0-2.66,8.19,12.53,12.53,0,0,0,2.62,8.27,9.33,9.33,0,0,0,7.62,3.16,9.91,9.91,0,0,0,7.43-3Z" />
        <polygon points="235.2 31.47 237.1 28.72 228.57 28.95 222.55 28.95 222.55 22.17 249.75 22.17 233.98 47.92 232.08 50.82 240.31 50.51 249.14 50.36 249.14 57.14 219.28 57.14 235.2 31.47" />
        <path d="M186.51,55.47A16.87,16.87,0,0,1,180,48.84a19.87,19.87,0,0,1,0-18.52,16.54,16.54,0,0,1,6.44-6.62,18.9,18.9,0,0,1,9.75-2.44,18.69,18.69,0,0,1,9.52,2.44,16.64,16.64,0,0,1,6.4,6.62,19,19,0,0,1,2.25,9.22,19.11,19.11,0,0,1-2.28,9.3,17.06,17.06,0,0,1-6.37,6.63,18.58,18.58,0,0,1-9.52,2.43A18.84,18.84,0,0,1,186.51,55.47Zm16.8-7.62a13.09,13.09,0,0,0,2.56-8.23,12.84,12.84,0,0,0-2.75-8.34,8.81,8.81,0,0,0-7.23-3.39,8.44,8.44,0,0,0-7,3.35,13.15,13.15,0,0,0-2.62,8.38,12.16,12.16,0,0,0,2.81,8.19,9.09,9.09,0,0,0,7.24,3.31,8.28,8.28,0,0,0,7-3.2Z" />
        <path d="M112.08,22.17h8.22v6.4a11.84,11.84,0,0,1,4.92-5.41,14.87,14.87,0,0,1,7.43-1.9c6.25,0,10,2.16,11.43,6.47a12,12,0,0,1,5-4.72,15.21,15.21,0,0,1,7.09-1.75,13.9,13.9,0,0,1,8.31,2.09,10.09,10.09,0,0,1,3.8,5.95,44.72,44.72,0,0,1,1,10.32V57.14H161V39.54a22.34,22.34,0,0,0-1.26-8.84A4.82,4.82,0,0,0,154.9,28a8.64,8.64,0,0,0-7.28,3.24,13.6,13.6,0,0,0-2.48,8.49V57.14h-8.23V38.32a42.14,42.14,0,0,0-.3-5.94,4.89,4.89,0,0,0-1.68-3.12,6.86,6.86,0,0,0-4.42-1.15,8.77,8.77,0,0,0-5,1.6,11.71,11.71,0,0,0-3.8,4.29,12.7,12.7,0,0,0-1.41,5.83V57.14h-8.22Z" />
        <path d="M80,0V80H0V0ZM38.1,67.3H3.81v8.89H38.1ZM67.5,53.16A9.52,9.52,0,0,0,57.3,61a9.76,9.76,0,0,1-15.4,5.6h0v9.64H76.19V62.34A9.54,9.54,0,0,0,67.5,53.16ZM76.19,41.9H41.9V59.05a5.87,5.87,0,0,0,5.89,5.71A5.71,5.71,0,0,0,53.6,60a12.08,12.08,0,0,1,2.67-5.58,13.46,13.46,0,0,1,18.94-1.88,11.62,11.62,0,0,1,1,.88h0ZM38.1,54.61H3.81v8.88H38.1Zm0-12.71H3.81v8.9H38.1ZM76.19,3.81H41.9V38.1H76.19ZM68.57,7.62,53.33,34.29H49.52L64.76,7.62ZM13.33,13.33H9.52V28.57h3.81V20a2.86,2.86,0,0,1,5.72,0h0v8.57h3.81V20a2.86,2.86,0,0,1,5.71-.34,1.93,1.93,0,0,1,0,.34h0v8.57h3.81V20a6.66,6.66,0,0,0-3.81-6,6.44,6.44,0,0,0-5.71,0A6.87,6.87,0,0,0,21,15.35,6.61,6.61,0,0,0,19.05,14a6.46,6.46,0,0,0-5.72,0h0Z" />
      </Logo>
      <Version>{release}</Version>
      <SubTitle>
        A design system to reinforce team’s delivery time, improve quality of
        deliverables and thus help set up a coherent customer experience.
      </SubTitle>
    </Container>
  </Jumbo>
)

// --------- NAV

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    border-left: solid 2px #000;
  }
`

const NavWrapper = styled.div`
  padding: 0;
  margin: 0 -2rem;
  border-top: solid 2px #000;

  @media screen and (min-width: 768px) {
    margin: 0;
    border-bottom: solid 2px #000;
  }
`

const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding: 0.75rem 2rem;
  border-bottom: solid 2px #000;
  color: #000;
  font-weight: 700;

  &:hover {
    background: #f5f5f5;
  }

  @media screen and (min-width: 768px) {
    border-right: solid 2px #000;
    border-bottom: 0;
    padding: 1.5rem;
    flex: 1;
    text-align: center;
  }
`

const Navigation = () => (
  <NavWrapper>
    <Container>
      <Nav>
        <NavLink to="/GetStarted/">Get Started</NavLink>
        <NavLink to="/Foundations/">Documentation</NavLink>
        <NavLink to="/Contributing/">Contribute</NavLink>
        <NavLink to="/Updates/">What's new</NavLink>
        <NavLink to="/Help/">Contact us</NavLink>
      </Nav>
    </Container>
  </NavWrapper>
)

// --------- BASICS

const DarkSlice = styled.div`
  background: #222020;
  padding: 2rem 0;
  color: #fff;
`

const H2 = styled.h2`
  font-size: 40px;
  line-height: 1;
  margin: 1.5rem 0;
  font-weight: bold;
`

const Blocks = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;

    > div {
      flex: 1;
    }
  }
`

const Card = styled(Link)`
  display: block;
  background: #fff;
  border-radius: 0px;
  box-shadow: 0px 1px 2px 0px rgba(255, 255, 255, 0.05),
    0px 4px 8px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    max-width: 55%;
    margin-bottom: -7rem;
    margin-right: 2rem;
  }
`

Card.body = styled.div`
  color: #000;
  padding: 1.5rem 2rem 3rem;
`

Card.Image = styled.img`
  width: 100%;
  height: auto;
  background: #f5f5f5;
`

Card.title = styled.h3`
  margin-top: 0;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  margin-bottom: 0.5rem;
`

Card.paragraph = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: normal;
`

Card.link = styled.p`
  line-height: 1;
  margin: 0;
  margin-top: 1.5rem;
  font-weight: 700;
  text-decoration: underline;
`

const Slack = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    max-width: 380px;
  }
`

Slack.icon = styled.svg`
  flex: 0 0 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1.5rem;
`

Slack.band = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`

Slack.title = styled.h3`
  display: flex;
  margin-bottom: 0;
  font-size: 1.5rem;
  font-weight: 700;
`

Slack.p = styled.p`
  font-style: italic;
  font-size: 18px;
  margin: 0;
`

Slack.button = styled.a`
  margin-top: 1.25rem;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #fff;
  color: #fff;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
`

const Basics = () => (
  <DarkSlice>
    <Container>
      <H2>Discover the basics</H2>
      <Blocks>
        <Card to="/Contributing">
          <Card.Image src={illustration} />
          <Card.body>
            <Card.title>Contributing</Card.title>
            <Card.paragraph>
              Learn how to contribute to Mozaic, report a bug, submit changes or
              ask for help.
            </Card.paragraph>
            <Card.link>Discover</Card.link>
          </Card.body>
        </Card>
        <Slack>
          <Slack.title>Talk with us</Slack.title>

          <Slack.band>
            <Slack.icon
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
            >
              <path d="M8.32,25a4.16,4.16,0,1,1-4.16-4.16H8.32Z" />
              <path d="M10.42,25a4.16,4.16,0,0,1,8.32,0V35.45a4.16,4.16,0,0,1-8.32,0Z" />
              <path d="M14.58,8.32a4.16,4.16,0,1,1,4.16-4.16V8.32Z" />
              <path d="M14.58,10.42a4.16,4.16,0,0,1,0,8.32H4.16a4.16,4.16,0,0,1,0-8.32Z" />
              <path d="M31.29,14.58a4.16,4.16,0,1,1,4.16,4.16H31.29Z" />
              <path d="M29.19,14.58a4.16,4.16,0,1,1-8.32,0V4.16a4.16,4.16,0,1,1,8.32,0Z" />
              <path d="M25,31.29a4.16,4.16,0,1,1-4.16,4.16V31.29Z" />
              <path d="M25,29.19a4.16,4.16,0,0,1,0-8.32H35.45a4.16,4.16,0,0,1,0,8.32Z" />
            </Slack.icon>
            <Slack.p>
              Join the channel <b>#mozaic-support</b> to get quick help from the
              community.
            </Slack.p>
          </Slack.band>
          <Slack.button
            href="https://adeo-tech-community.slack.com/messages/CKQJZL7C4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join us on Slack
          </Slack.button>
        </Slack>
      </Blocks>
    </Container>
  </DarkSlice>
)

// --------- SIGNATURE

const SignatureWrapper = styled.footer`
  padding-top: 3.5rem;
  padding-bottom: 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 1.5rem;
    border-top: solid 1px #222020;
    max-width: 436px;
    margin: 12rem auto 0;
  }
`

const SignatureText = styled.p`
  margin: 0 0 0 1rem;
  font-size: 14px;
  line-height: 1rem;
`

const SignatureLogo = styled.img`
  max-height: 2rem;
  margin: 1rem 0.5rem;
`

const Signature = () => (
  <SignatureWrapper>
    <SignatureText>Mozaic, A product made by</SignatureText>
    <SignatureLogo src={leroyMerlin} alt="" />
    <SignatureLogo src={adeo} alt="" />
  </SignatureWrapper>
)

// --------- PAGE

const IndexPage = ({ release }) => (
  <Global>
    <Social />
    <Jumbotron release={release} />
    <Navigation />
    <Basics />
    <Signature />
  </Global>
)

const query = graphql`
  query currentRelase {
    githubRelease(isCurrent: { eq: true }) {
      tagName
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={data => <IndexPage release={data.githubRelease.tagName} />}
  />
)
