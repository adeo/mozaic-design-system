import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './base.scss'
import Menu from './Menu'
import Color from './Color'
import Swatch from './Swatch'
import Hint, { HintItem } from './Hint'
import IconViewer from './IconViewer'
import InlineCode from './InlineCode'
import Highlight from './Highlight'
import SubContents from './SubContents'
import Story from './Story'

const shortcodes = {
  Color,
  Swatch,
  Hint,
  HintItem,
  IconViewer,
  Highlight,
  inlineCode: InlineCode,
  Story,
}

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

const Layout = ({ children, location }) => {
  shortcodes.SubContents = SubContents(location)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Global>
      <AsideContainer>
        <Menu location={location} siteTitle={data.site.siteMetadata.title} />
      </AsideContainer>
      <MDXProvider components={shortcodes}>
        <Main id="scroller">{children}</Main>
      </MDXProvider>
    </Global>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout