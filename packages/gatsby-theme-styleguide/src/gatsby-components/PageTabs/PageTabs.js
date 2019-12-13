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
  background: #e6e6e6;

  .page-tabs {
    &__content {
      display: inline-flex;
    }

    &__link {
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

      &:hover,
      &--active {
        &::after {
          background: #000;
        }
      }

      &--active {
        font-weight: bold;
      }
    }
  }
`

const TabsWrapper = styled.div`
  padding-left: ${MagicUnit * 3}rem;
  max-width: ${MagicUnit * 52}rem;
`

const TabItem = styled.div``

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
      <Tabs id="page_tabs_menu" className="page-tabs">
        <TabsWrapper className="page-tabs__content">
          {cleanTabs.map(node => (
            <TabItem key={node.slug} className="page-tabs__item">
              <Link
                to={node.slug}
                className="page-tabs__link"
                activeClassName="page-tabs__link--active"
              >
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
