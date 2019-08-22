import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Container from '../gatsby-components/Container'
import Layout from '../gatsby-components/layout-mdx'
import PageTabs from '../gatsby-components/PageTabs'

const FullWidthContainer = styled.div`
  ${({ separator }) =>
    separator &&
    css`
      border-bottom: solid 1px #f5f5f5;
    `};
`

const PageContent = styled.div`
  ul {
    margin: 20px;
  }
`

export default ({ data, location }) => {
  const post = data.mdx

  const otherPosts = data.allMdx.edges

  const samePageTabs = [...otherPosts].filter(({ node }) => {
    console.log(JSON.stringify(post.fields.fileName, 0, 2))

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
  const parentTitle = samePageTabs.find(
    tab => tab.node.fields.fileName.name === 'index'
  ).node.frontmatter.title

  const hasTabs = samePageTabs.length > 1

  return (
    <Layout location={location}>
      <div>
        <FullWidthContainer separator>
          <Container>
            <h1>{parentTitle}</h1>
          </Container>
        </FullWidthContainer>
        {hasTabs && <PageTabs samePageTabs={samePageTabs} />}

        <FullWidthContainer>
          <Container>
            <PageContent className="main">
              <MDXRenderer>{post.body}</MDXRenderer>
            </PageContent>
          </Container>
        </FullWidthContainer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
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
