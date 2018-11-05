import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TabItem = styled.div`
  display: inline-block;
  padding-right: 10px;
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
        title: 'presentation', // rename index tab 'presentation'
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
      <>
        {cleanTabs.map(node => (
          <TabItem key={node.slug}>
            <Link to={node.slug}>{node.title}</Link>
          </TabItem>
        ))}
      </>
    )
  }
}

export default PageTabs
