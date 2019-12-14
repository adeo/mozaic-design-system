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
  ${({ separator }) =>
    separator &&
    css`
      .header {
        background: #e6e6e6;
        border-bottom: solid 1px black;
        padding: ${MagicUnit * 2.25}rem ${MagicUnit * 3}rem
          ${MagicUnit * 2.5}rem;

        &__title {
          font-weight: normal;
          margin: 0 0 0.75rem;
          line-height: 1;
          font-size: ${MagicUnit * 3}rem;
        }

        &__description {
          font-size: 1.25rem;
          margin: 0 0 1.5rem;
          max-width: 38.63rem;
        }
      }
    `};
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
  const parentDescription = parentFrontmatter.description
  const mainCategory = post.fields.slug ? post.fields.slug.split('/') : []
  const hasTabs = samePageTabs.length > 1

  return (
    <Layout location={location} tableOfContents={tableOfContents}>
      <FullWidthContainer separator>
        <Container className="header">
          {mainCategory.length > 3 && <h4>{mainCategory[1]}</h4>}
          <h1 class="header__title">{parentTitle}</h1>
          <p class="header__description">{parentDescription}</p>
          <PatternStatusGroup status={parentStatus} />
        </Container>
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
