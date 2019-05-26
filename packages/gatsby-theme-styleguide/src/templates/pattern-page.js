import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../gatsby-components/layout'
import Container from '../gatsby-components/Container'
import Preview from '../gatsby-components/Preview'
import Color from '../gatsby-components/Color'
import Swatch from '../gatsby-components/Swatch'
import PageTabs from '../gatsby-components/PageTabs'
import Hint, { HintItem } from '../gatsby-components/Hint'
import IconViewer from '../gatsby-components/IconViewer'

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
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      preview: Preview,
      hint: Hint,
      hintitem: HintItem,
      color: Color,
      swatch: Swatch,
      iconviewer: IconViewer,
    },
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
              {renderAst(post.htmlAst)}
            </PageContent>
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
