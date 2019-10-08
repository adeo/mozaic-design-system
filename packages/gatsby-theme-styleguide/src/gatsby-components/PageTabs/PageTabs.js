import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MagicUnit } from '@mozaic-ds/tokens/build/js/tokens.js'

const Tabs = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  background: #fff;
  border-bottom: solid 1px #f5f5f5;
`

const TabsWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MagicUnit * 52}rem;
`

const TabItem = styled.div`
  display: inline-block;
  padding: 15px;
  height: 100%;
  border-right: solid 1px #f5f5f5;

  &:first-child {
    border-left: solid 1px #f5f5f5;
  }

  .active-link {
    font-weight: bold;
    color: #555;
  }
`

class PageTabs extends PureComponent {
  orderPageTab = pageTabs => {
    // order using frontmatter order tag and remove index
    const orderedTabs = [...pageTabs]
      .sort((a, b) => {
        return a.node.frontmatter.order - b.node.frontmatter.order
      })
      .filter(tab => tab.node.fields.fileName.name !== 'index')

    const cleanIndex = [...pageTabs].find(
      tab => tab.node.fields.fileName.name === 'index'
    )

    const newArr = [
      {
        title: 'Usage', // rename index tab 'Usage'
        slug: cleanIndex.node.fields.slug,
      },
      ...orderedTabs.map(tab => ({
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
          {cleanTabs.map(node => (
            <TabItem key={node.slug}>
              <Link to={node.slug} activeClassName="active-link">
                {node.title}
              </Link>
            </TabItem>
          ))}
        </TabsWrapper>
      </Tabs>
    )
  }
}

export default PageTabs
