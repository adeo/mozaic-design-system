import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './base.scss'
import Menu from './Menu'
import withLocationPreview from '../components/Preview/withLocation'
import Color from '../components/Color'
import Swatch from '../components/Swatch'
import Hint, { HintItem } from '../components/Hint'
import IconViewer from '../components/IconViewer'
import Code from '../components/Code'
import InlineCode from '../components/InlineCode'
import Highlight from '../components/Highlight'
import SubContents from '../components/SubContents'
import DesignerKitLink from '../components/DesignerKitLink'
import Story from '../components/Story'

const shortcodes = {
  Color,
  Swatch,
  Hint,
  HintItem,
  IconViewer,
  DesignerKitLink,
  Highlight,
  pre: ({ children }) => <Code>{children}</Code>,
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
  const Preview = withLocationPreview(location)
  shortcodes.Preview = Preview
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
