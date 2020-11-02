import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import AreaContact from '../components/AreaContact'
import AreaDiscover from '../components/AreaDiscover'
import AreaValues from '../components/AreaValues'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './index.scss'

const Container = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 680px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

// --------- COMMON
const Global = styled.main`
  position: relative;
`

// --------- PAGE
const IndexPage = ({ release, discover, contactus, ourvalues }) => (
  <Global>
    <Header />
    <AreaDiscover cards={discover} />
    <AreaContact cards={contactus} />
    <AreaValues values={ourvalues} />
    <Footer />
  </Global>
)

const query = graphql`
  query currentRelase {
    githubRelease(isCurrent: { eq: true }) {
      tagName
    }
    dataJson {
      home {
        contactus {
          icon
          title
          text
          link
          linkLabel
        }
        discover {
          img
          title
          text
          link
        }
        ourvalues {
          title
          text
        }
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <IndexPage
        release={data.githubRelease.tagName}
        discover={data.dataJson.home.discover}
        contactus={data.dataJson.home.contactus}
        ourvalues={data.dataJson.home.ourvalues}
      />
    )}
  />
)
