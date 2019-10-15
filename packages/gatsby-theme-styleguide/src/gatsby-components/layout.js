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
  overflow: hidden;
`

const Main = styled.main`
  flex: 1;
  scroll-behavior: smooth;
  overflow: auto;
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
            <script>
              {`
              <!-- Hotjar Tracking Code for http://mozaic.adeo.cloud -->
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:1528294,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

              `}
            </script>
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
