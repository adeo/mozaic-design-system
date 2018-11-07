import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../gatsby-components/layout'
import Pattern from '../gatsby-components/Pattern'
import PageTabs from '../gatsby-components/PageTabs'
import Hint from '../components/Hint'

const FullWidthContainer = styled.div`
  ${({ separator }) =>
    separator &&
    css`
      border-bottom: solid 1px #f5f5f5;
    `};
`

const Container = styled.div`
  padding: 15px 30px;
  margin: 0 auto;
  max-width: 760px;
`

const PageContent = styled.div`
  ul {
    margin: 20px;
  }
`

export default ({ data }) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { pattern: Pattern, hint: Hint },
  }).Compiler

  const post = data.markdownRemark
  const otherPosts = data.allMarkdownRemark.edges

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
  const parentTitle = samePageTabs.find(
    tab => tab.node.fields.fileName.name === 'index'
  ).node.frontmatter.title

  // if index, use presentation as tab title instead of index
  const tabTitle =
    post.frontmatter.title === parentTitle
      ? 'presentation'
      : post.frontmatter.title

  return (
    <Layout>
      <div>
        <FullWidthContainer separator>
          <Container>
            <h1>{parentTitle}</h1>
          </Container>
        </FullWidthContainer>
        <FullWidthContainer separator>
          <Container>
            <PageTabs samePageTabs={samePageTabs} />
          </Container>
        </FullWidthContainer>
        <FullWidthContainer>
          <Container>
            <h2>{post.frontmatter.title}</h2>
            <PageContent>{renderAst(post.htmlAst)}</PageContent>
          </Container>
        </FullWidthContainer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
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
    allMarkdownRemark {
      edges {
        node {
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
        }
      }
    }
  }
`
