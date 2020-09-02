import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'
import Container from '../gatsby-components/Container'
import Layout from '../gatsby-components/layout'
import PageTabs from '../gatsby-components/PageTabs'
import CalloutVue from '../gatsby-components/CalloutVue'
import TableOfContents from '../gatsby-components/TableOfContents'
import PatternStatusGroup from '../gatsby-components/PatternStatusGroup'
import JSImplementation from '../gatsby-components/JSImplementation'
import { DisplayDisplayList32, ControlCross32 } from '@mozaic-ds/icons/react'

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

const MenuTriggerButton = styled.button`
  background: #e6e6e6;
  border: none;
  cursor: pointer;
  height: 2rem;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2rem;
  z-index: 2000;

  @media screen and (min-width: 1024px) {
    display: none;
  }

  .triggerMenu {
    &__open {
      display: block;

      .nav-open & {
        display: none;
      }
    }

    &__close {
      display: none;

      .nav-open & {
        display: block;
      }
    }
  }
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

export default ({ data, location }) => {
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
    tab => tab.node.fields.fileName.name === 'index'
  ).node.frontmatter
  const parentTitle = parentFrontmatter.title
  const parentStatus = parentFrontmatter.status
  const parentLinks = parentFrontmatter.links
  const mainCategory = post.fields.slug ? post.fields.slug.split('/') : []
  const hasTabs = samePageTabs.length > 1
  const hasMainCategory = mainCategory.length > 3
  const hasVueLink = parentLinks && parentLinks.vue && parentLinks.vue.link
  const handleMenu = () => {
    if (document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open')
      return false
    }

    document.body.classList.add('nav-open')
  }

  return (
    <Layout location={location} tableOfContents={tableOfContents}>
      <FullWidthContainer separator>
        <Header hasMainCategory={hasMainCategory}>
          <MenuTriggerButton
            className="triggerMenu"
            type="button"
            title="Open Menu"
            onClick={handleMenu}
          >
            <DisplayDisplayList32
              className="triggerMenu__open"
              fill="currentColor"
            />
            <ControlCross32
              className="triggerMenu__close"
              fill="currentColor"
            />
          </MenuTriggerButton>
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

export const query = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      tableOfContents
      fields {
        slug
        fileName {
          name
          base
          relativePath
          extension
        }
      }
      frontmatter {
        title
        order
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
              freemarker {
                status
                link
              }
            }
            status {
              sketch
              scss
              react
              vue
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
              extension
            }
          }
          excerpt
        }
      }
    }
  }
`
