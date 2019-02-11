import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MenuItem from './MenuItem'
import MenuHeader from './MenuHeader'

const MenuItemContainer = styled.div`
  display: flex;
`

const ShowChildrenButton = styled.button`
  margin: 8px 15px;
  flex: initial;
  align-self: flex-end;
`

const Container = styled.div`
  width: 220px;
`

const UlMenu = styled.ul`
  padding-left: 10px;
  list-style: none;
`

export default class Menu extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    siteTitle: PropTypes.string.isRequired,
  }

  buildMenu = menuArray => (
    <UlMenu>
      {menuArray.map(item => (
        <li key={item.dirPath}>
          <MenuItemContainer>
            <MenuItem to={item.slug} content={item.title} />
            {item.children && <ShowChildrenButton>+</ShowChildrenButton>}
          </MenuItemContainer>
          {item.children && <div>{this.buildMenu(item.children)}</div>}
        </li>
      ))}
    </UlMenu>
  )

  buildMenuModel = (markdowns, fileTree) => {
    const markdownsIndexes = markdowns
      .filter(markdown => markdown.node.fields.fileName.base === 'index.md')
      .map(({ node }) => ({
        dirPath: node.fields.fileName.relativePath.replace(
          `/${node.fields.fileName.base}`,
          ''
        ), // normalise path to compare between markdowns and dirtree
        slug: node.fields.slug,
        title: node.frontmatter.title,
        order: node.frontmatter.order ? node.frontmatter.order : 100,
      }))

    // is it a menu item candidate
    const isAMenuItemDir = node =>
      node.type === 'directory' && !node.name.includes('--')

    // return a directory tree with only directories
    const filterDirectories = subTree =>
      subTree
        // filter what's not a directory or is a pattern directory
        .filter(isAMenuItemDir)
        .map(dir => ({
          path: dir.path.replace(/\\/g, '/').replace('src/', ''), // normalise path to compare between markdowns and dirtree
          children:
            dir.childrenNode && dir.childrenNode.length > 0
              ? filterDirectories(dir.childrenNode)
              : [],
        }))

    const MenuBuilderIterator = (dirs, indexes) =>
      dirs
        .map(dir => {
          let dirIndex

          const relatedIndex =
            indexes.find(index => {
              return index.dirPath === dir.path
            }) || undefined

          if (relatedIndex) {
            dirIndex = relatedIndex
          } else {
            dirIndex = {
              dirPath: dir.path,
              title: dir.path.split('/').pop(),
            }
          }

          if (dir.children && dir.children.length > 0) {
            dirIndex.children = MenuBuilderIterator(dir.children, indexes)
          }

          return dirIndex
        })
        .sort((a, b) => a.order - b.order)

    return MenuBuilderIterator(filterDirectories(fileTree), markdownsIndexes)
  }

  render() {
    const { siteTitle, data } = this.props

    const menuArray = this.buildMenuModel(
      data.allMarkdownRemark.edges,
      data.directoryTree.childrenNode
    )

    console.log(JSON.stringify(menuArray, 0, 2))

    return (
      <Container>
        <MenuHeader
          siteTitle={siteTitle}
          githubReleases={data.allGithubRelease.edges}
        />
        <nav>{this.buildMenu(menuArray)}</nav>
      </Container>
    )
  }
}
