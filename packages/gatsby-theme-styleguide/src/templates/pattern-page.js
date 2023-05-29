import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled, { css } from 'styled-components'
import CalloutVue from '../gatsby-components/CalloutVue'
import Container from '../gatsby-components/Container'
import JSImplementation from '../gatsby-components/JSImplementation'
import Layout from '../gatsby-components/layout'
import MenuButton from '../gatsby-components/Menu/MenuButton'
import PageTabs from '../gatsby-components/PageTabs'
import PatternStatusGroup from '../gatsby-components/PatternStatusGroup'
import TableOfContents from '../gatsby-components/TableOfContents'

const FullWidthContainer = styled.div`
  ${({ separator }) => separator};
`

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

const PageContent = styled.div`
  flex: 1;

  @media screen and (min-width: 1280px) {
    min-width: ${MagicUnit * 30}rem;
    flex: 0 0 ${MagicUnit * 52}rem;
  }

  ul {
    margin: 20px;
  }

  h1,
  h2,
  h3,
  h4 {
    &:not(:first-child) {
      margin-top: 2em;
      margin-bottom: 1.25em;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

const Header = styled(Container)`
  border-bottom: solid 1px black;

  ${({ hasMainCategory }) =>
    hasMainCategory
      ? css`
          padding: ${MagicUnit * 1.5}rem ${MagicUnit * 3}rem
            ${MagicUnit * 2.375}rem;
        `
      : css`
          padding: ${MagicUnit * 3}rem;
        `};
`

const HeaderTitle = styled.h1`
  font-weight: normal;
  margin: 0;
  line-height: 1.167;
  font-size: ${MagicUnit * 3}rem;

  &:not(:only-child) {
    margin: 0 0 0.75rem;
  }
`

const HeaderCategory = styled.span`
  color: #1c4d46;
  font-size: 10px;
  text-transform: uppercase;
`

const PatternPage = ({ data, location }) => {
  const post = data.mdx
  const { tableOfContents } = data.mdx

  const otherPosts = data.allMdx.edges

  const samePageTabs = [...otherPosts].filter(({ node }) => {
    const nodePath = node.fields.fileName.relativePath.replace(
      node.fields.fileName.base,
      ''
    )
    const postPath = post.fields.fileName.relativePath.replace(
      post.fields.fileName.base,
      ''
    )
    return nodePath === postPath
  })

  // use the index title as main Page name
  // use the index status for all other tabs
  const parentFrontmatter = samePageTabs.find(
    (tab) => tab.node.fields.fileName.name === 'index'
  ).node.frontmatter
  const parentTitle = parentFrontmatter.title
  const parentStatus = parentFrontmatter.status
  const parentLinks = parentFrontmatter.links
  const mainCategory = post.fields.slug ? post.fields.slug.split('/') : []
  const hasTabs = samePageTabs.length > 1
  const hasMainCategory = mainCategory.length > 3
  const hasVueLink = parentLinks && parentLinks.vue && parentLinks.vue.link

  return (
    <Layout location={location} tableOfContents={tableOfContents}>
      <FullWidthContainer separator>
        <Header hasMainCategory={hasMainCategory}>
          <MenuButton />
          {hasMainCategory && (
            <HeaderCategory>{mainCategory[1]}</HeaderCategory>
          )}
          <HeaderTitle>{parentTitle}</HeaderTitle>
          <PatternStatusGroup status={parentStatus} />
          <JSImplementation links={parentLinks} />
        </Header>
      </FullWidthContainer>
      {hasTabs && <PageTabs samePageTabs={samePageTabs} />}

      <PageContentWrapper>
        <PageContent>
          <Container>
            {location.state && location.state.isCode && hasVueLink && (
              <CalloutVue link={parentLinks.vue.link} />
            )}
            <MDXRenderer>{post.body}</MDXRenderer>
          </Container>
        </PageContent>
        <TableOfContents tableOfContents={tableOfContents} />
      </PageContentWrapper>
    </Layout>
  )
}

export default PatternPage

export const Head = ({ data }) => (
  <>
    <title>{data.mdx.frontmatter.title} – Mozaic Design System</title>
    <meta name="description" content={data.mdx.frontmatter.description} />
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
    <script
      src="https://embed.small.chat/T4R6RCZFAG0182TS10L8.js"
      async
    ></script>
  </>
)

export const query = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      fields {
        slug
        fileName {
          name
          base
          relativePath
        }
      }
      frontmatter {
        title
        description
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
            links {
              vue {
                status
                link
              }
              react {
                status
                link
              }
              freemarker {
                status
                link
              }
              webComponent {
                status
                link
              }
            }
            status {
              sketch
              scss
              figma
            }
            description
          }
          fields {
            slug
            fileName {
              name
              base
              relativePath
            }
          }
        }
      }
    }
  }
`
