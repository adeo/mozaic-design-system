import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'

const Tabs = styled.div`
  position: sticky;
  width: 100%;
  z-index: 1;
  top: 0;
  border-bottom: solid 1px #000;
  background: white;

  @media screen and (max-width: 767px) {
    overflow-x: auto;
  }
`

const TabsWrapper = styled.div`
  display: inline-flex;
  padding-left: ${MagicUnit * 1.5}rem;
  max-width: ${MagicUnit * 52}rem;

  @media screen and (min-width: 768px) {
    padding-left: ${MagicUnit * 3}rem;
  }
`

const TabItem = styled.div``

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

class PageTabs extends PureComponent {
  orderPageTab = (pageTabs) => {
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

  render() {
    const { samePageTabs } = this.props
    const cleanTabs = this.orderPageTab(samePageTabs)
    return (
      <Tabs id="page_tabs_menu">
        <TabsWrapper>
          {cleanTabs.map((node) => (
            <TabItem key={node.slug}>
              <TabLink
                to={node.slug}
                activeClassName="is-active"
                state={{
                  isCode: node.title === 'Code',
                }}
              >
                {node.title}
              </TabLink>
            </TabItem>
          ))}
        </TabsWrapper>
      </Tabs>
    )
  }
}

export default PageTabs
