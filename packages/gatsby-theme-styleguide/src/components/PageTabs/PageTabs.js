import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'
import * as styles from './tabs.module.css'

const TabLink = styled(Link)`
  color: #000;
  display: block;
  position: relative;
  padding: ${MagicUnit}rem ${MagicUnit * 1.5}rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.25rem;
  }

  &:hover:not(.is-active) {
    &::after {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  &.is-active {
    font-weight: bold;

    &::after {
      background: rgba(0, 0, 0, 1);
    }
  }
`

const PageTabs = ({ currentPage }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: { slug: ASC } }) {
        edges {
          node {
            fields {
              fileName {
                base
                extension
                name
                relativePath
              }
              slug
            }
            frontmatter {
              description
              order
              title
            }
            id
          }
        }
        totalCount
      }
    }
  `)

  const allPages = data.allMdx.edges
  const samePageTabs = allPages.filter(({ node }) => {
    const nodePath = node.fields.fileName.relativePath.replace(
      node.fields.fileName.base,
      ''
    )

    const currentPath = currentPage.fields.fileName.relativePath.replace(
      currentPage.fields.fileName.base,
      ''
    )

    return nodePath === currentPath
  })
  const orderPageTab = (pageTabs) => {
    // order using frontmatter order tag and remove index
    const orderedTabs = [...pageTabs]
      .sort((a, b) => {
        return a.node.frontmatter.order - b.node.frontmatter.order
      })
      .filter((tab) => tab.node.fields.fileName.name !== 'index')

    const cleanIndex = [...pageTabs].find(
      (tab) => tab.node.fields.fileName.name === 'index'
    )

    const newArr = [
      {
        title: 'Usage', // rename index tab 'Usage'
        slug: cleanIndex.node.fields.slug,
      },
      ...orderedTabs.map((tab) => ({
        title: tab.node.frontmatter.title,
        slug: tab.node.fields.slug,
      })),
    ]

    return newArr
  }
  const cleanTabs = orderPageTab(samePageTabs)

  return (
    <div id="page_tabs_menu" className={styles.container}>
      <div className={styles.wrapper}>
        {cleanTabs.map((node) => (
          <div className={styles.tabItem} key={node.slug}>
            <Link
              to={node.slug.toLowerCase()}
              className={styles.tabLink}
              activeClassName={styles.isActive}
              state={{
                isCode: node.title === 'Code',
              }}
            >
              {node.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageTabs
