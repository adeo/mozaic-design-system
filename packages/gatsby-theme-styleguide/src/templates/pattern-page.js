import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'
import Container from '../gatsby-components/Container'
import Layout from '../gatsby-components/layout'
import PageTabs from '../gatsby-components/PageTabs'
import TableOfContents from '../gatsby-components/TableOfContents'
import PatternStatusGroup from '../gatsby-components/PatternStatusGroup'

const FullWidthContainer = styled.div`
  ${({ separator }) => separator};
`

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const PageContent = styled.div`
  flex: 1;
  min-width: ${MagicUnit * 30}rem;

  @media screen and (min-width: 1240px) {
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
  background: #e6e6e6;
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
  const mainCategory = post.fields.slug ? post.fields.slug.split('/') : []
  const hasTabs = samePageTabs.length > 1
  const hasMainCategory = mainCategory.length > 3

  return (
    <Layout location={location} tableOfContents={tableOfContents}>
      <FullWidthContainer separator>
        <Header hasMainCategory={hasMainCategory}>
          {hasMainCategory && (
            <HeaderCategory>{mainCategory[1]}</HeaderCategory>
          )}
          <HeaderTitle>{parentTitle}</HeaderTitle>
          <PatternStatusGroup status={parentStatus} />
        </Header>
      </FullWidthContainer>
      {hasTabs && <PageTabs samePageTabs={samePageTabs} />}

      <PageContentWrapper>
        <PageContent>
          <Container>
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
            status {
              sketch
              scss
              react
              vue
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
