import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MagicUnit } from '@mozaic-ds/tokens/build/lm/js/tokens.js'
import './styles.scss'

const Tabs = styled.div`
padding-left: 2rem;
`

const TabsWrapper = styled.ul`
`

const TabItem = styled.li``

const TabLink = styled(Link)``

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
      <Tabs className="mc-tabs  mc-tabs--full" id="page_tabs_menu">
        <TabsWrapper className="mc-tabs__nav">
          {cleanTabs.map((node) => (
            <TabItem key={node.slug} className="mc-tabs__item">
              <TabLink
                to={node.slug}
                activeClassName="mc-tabs__element--selected"
                className="mc-tabs__element"
                state={{
                  isCode: node.title === 'Code',
                }}
              >
                <span className="mc-tabs__text">{node.title}</span>
              </TabLink>
            </TabItem>
          ))}
        </TabsWrapper>
      </Tabs>
    )
  }
}

export default PageTabs
