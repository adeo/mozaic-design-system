import React from 'react'
import PropTypes from 'prop-types'
import Helmet from './Helmet'
import { MDXProvider } from '@mdx-js/react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './base.scss'
import Menu from './Menu'
import withLocationPreview from '../gatsby-components/Preview/withLocation'
import Color from '../gatsby-components/Color'
import Swatch from '../gatsby-components/Swatch'
import Hint, { HintItem } from '../gatsby-components/Hint'
import IconViewer from '../gatsby-components/IconViewer'
import Code from '../gatsby-components/Code'
import InlineCode from '../gatsby-components/InlineCode'
import SubContents from '../gatsby-components/SubContents'
import DesignerKitLink from '../gatsby-components/DesignerKitLink'

const shortcodes = {
  Color,
  Swatch,
  Hint,
  HintItem,
  IconViewer,
  DesignerKitLink,
  pre: ({ children }) => <Code>{children}</Code>,
  inlineCode: InlineCode,
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
`

const MenuContainer = styled.nav`
  border-right: solid 1px #f5f5f5;
`

const Layout = ({ children, location }) => {
  const Preview = withLocationPreview(location)
  shortcodes.Preview = Preview
  shortcodes.SubContents = SubContents(location)

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Global>
            <Helmet title={data.site.siteMetadata.title}></Helmet>
            <MenuContainer>
              <Menu
                location={location}
                siteTitle={data.site.siteMetadata.title}
              />
            </MenuContainer>
            <MDXProvider components={shortcodes}>
              <Main id="scroller">{children}</Main>
            </MDXProvider>
          </Global>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
