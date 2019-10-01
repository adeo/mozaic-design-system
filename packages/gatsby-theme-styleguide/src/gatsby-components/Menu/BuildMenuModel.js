export default (markdowns, fileTree, location) => {
  // filter only index.md from all markdown to display in main menu
  const markdownsIndexes = markdowns
    .filter(markdown => markdown.node.fields.fileName.base === 'index.mdx')
    .map(({ node }) => ({
      dirPath: node.fields.fileName.relativePath.replace(
        `/${node.fields.fileName.base}`,
        ''
      ), // normalise path to compare between markdowns and dirtree
      slug: node.fields.slug,
      title: node.frontmatter.title,
      order: node.frontmatter.order ? node.frontmatter.order : 100,
    }))

  // return a directory tree with only directories
  const filterPagesDirectories = subTree =>
    subTree
      // filter what's not a directory
      .filter(node => node.type === 'directory' && node.name !== 'previews')
      .map(dir => ({
        path: dir.path.replace('src/', ''), // normalise path to compare between markdowns and dirtree
        children:
          dir.childrenNode && dir.childrenNode.length > 0
            ? filterPagesDirectories(dir.childrenNode)
            : [],
      }))

  const MenuBuilderIterator = (dirs, indexes) =>
    dirs
      .map(dir => {
        let dirIndex
        const level = dir.path.split('/').length - 1

        const relatedIndex =
          indexes.find(index => {
            return index.dirPath === dir.path
          }) || undefined

        if (relatedIndex) {
          dirIndex = {
            ...relatedIndex,
          }
        } else {
          dirIndex = {
            dirPath: dir.path,
            title: dir.path.split('/').pop(),
          }
        }

        if (dir.children && dir.children.length > 0) {
          dirIndex.children = MenuBuilderIterator(dir.children, indexes)
        }

        dirIndex.level = level
        dirIndex.isOpened = location.includes(dir.path.replace('docs', ''))
        // hilight current path even if the menu is closed
        dirIndex.isPartOfCurrentlocation = location.includes(
          dir.path.replace('docs', '')
        )

        return dirIndex
      })
      .sort((a, b) => a.order - b.order)

  const menu = MenuBuilderIterator(
    filterPagesDirectories(fileTree),
    markdownsIndexes
  )

  return menu
}
