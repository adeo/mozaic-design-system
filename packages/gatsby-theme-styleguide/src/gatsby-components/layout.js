import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
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

const shortcodes = {
  Color,
  Swatch,
  Hint,
  HintItem,
  IconViewer,
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

const Layout = ({ children, location, tableOfContents }) => {
  const Preview = withLocationPreview(location)
  shortcodes.Preview = Preview

  return (
    <StaticQuery
      query={query}
      render={data => (
        <Global>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <MenuContainer>
            <Menu
              location={location}
              siteTitle={data.site.siteMetadata.title}
              data={{
                directoryTree: data.directoryTree,
                allMdx: data.allMdx,
                allGithubRelease: data.allGithubRelease,
              }}
            />
          </MenuContainer>
          <MDXProvider components={shortcodes}>
            <Main id="scroller">{children}</Main>
          </MDXProvider>
        </Global>
      )}
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
    allGithubRelease {
      edges {
        node {
          tagName
          url
          isCurrent
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___order], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            order
          }
          fields {
            slug
            fileName {
              name
              base
              relativePath
              extension
            }
          }
          excerpt
        }
      }
    }
    directoryTree(path: { eq: "src/docs" }) {
      path
      name
      type
      childrenNode {
        path
        name
        type
        childrenNode {
          path
          name
          type
          childrenNode {
            path
            name
            type
          }
        }
      }
    }
  }
`
