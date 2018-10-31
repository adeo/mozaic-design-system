import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const TabItem = styled.div`
  display: inline-block;
  padding-right: 10px;
`

class PageTabs extends PureComponent {
  orderPageTab = PageTabs => {
    const orderedTabs = PageTabs.sort((a, b) => {
      return a.node.frontmatter.order - b.node.frontmatter.order
    }).sort(a => {
      return a.node.fields.fileName.name !== 'index'
    })

    orderedTabs[0].node.frontmatter.title = 'presentation'

    return orderedTabs
  }

  render() {
    const { samePageTabs } = this.props

    return (
      <>
        {this.orderPageTab(samePageTabs).map(({ node }) => (
          <TabItem>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </TabItem>
        ))}
      </>
    )
  }
}

export default PageTabs
