import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default class Menu extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({}),
  }

  buildLink = (dirPath, markdowns) => {
    const cleanDirPath = dirPath.replace('src/', '')
    const link = {}

    markdowns.forEach(({ node }) => {
      const cleanMdPath = node.fields.fileName.relativePath.replace(
        `/${node.fields.fileName.base}`,
        ''
      )
      if (
        cleanMdPath === cleanDirPath &&
        node.fields.fileName.base === 'index.md'
      ) {
        link.to = node.fields.slug
        link.content = node.frontmatter.title
      }
    })

    return <Link to={link.to}>{link.content}</Link>
  }

  buildMenu = (childrenNode, markdowns) => (
    <ul>
      {childrenNode.map(
        elem =>
          elem.type === 'directory' && (
            <li key={elem.path}>
              <div>{this.buildLink(elem.path, markdowns)}</div>

              {elem.childrenNode &&
                elem.childrenNode.length !== 0 && (
                  <div>{this.buildMenu(elem.childrenNode, markdowns)}</div>
                )}
            </li>
          )
      )}
    </ul>
  )

  render() {
    const { childrenNode } = this.props.data.directoryTree
    const { edges } = this.props.data.allMarkdownRemark
    return <>{this.buildMenu(childrenNode, edges)}</>
  }
}
