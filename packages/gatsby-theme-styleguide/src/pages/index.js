import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import AreaContact from '../components/AreaContact'
import AreaDiscover from '../components/AreaDiscover'
import AreaValues from '../components/AreaValues'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../gatsby-components/Menu'
import JSONData from '../../../../src/content/datas.json'
import './index.scss'

// --------- COMMON
const Global = styled.div`
  display: flex;
  align-content: stretch;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
`

const Main = styled.main`
  flex: 1;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  .nav-open & {
    overflow: hidden;
  }
`

const AsideContainer = styled.aside`
  background: #eeeef0;
  min-height: 100vh;
  position: relative;
  width: 18.75rem;

  @media screen and (max-width: 1023px) {
    left: 0;
    position: fixed;
    top: 0;
    transition: all 0.4s;
    transform: translateX(-100%);
    z-index: 1000;
  }

  .nav-open & {
    transform: translateX(0);
  }
`

// --------- PAGE
const IndexPage = ({ release, discover, contactus, ourvalues }) => {
  return (
    <Global>
      <AsideContainer>
        <Menu siteTitle={'Mozaic'} />
      </AsideContainer>
      <Main>
        <Header />
        <AreaDiscover cards={discover} />
        <AreaContact cards={contactus} />
        <AreaValues values={ourvalues} />
        <Footer />
      </Main>
    </Global>
  )
}

const Index = () => {
  const data = useStaticQuery(graphql`
    query currentRelase {
      githubRelease(isCurrent: { eq: true }) {
        tagName
      }
    }
  `)

  return (
    <IndexPage
      release={data.githubRelease.tagName}
      discover={JSONData.discover}
      contactus={JSONData.contactus}
      ourvalues={JSONData.ourvalues}
    />
  )
}

export default Index

export const Head = () => (
  <>
    <title>Mozaic Design System</title>
    <meta
      name="description"
      content="Mozaic is Adeo's Design System, created to enhance the team's delivery time, improve quality of deliverables and thus help set up a coherent customer experience."
    />
  </>
)
