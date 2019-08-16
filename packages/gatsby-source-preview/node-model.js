const { nodeIdString } = require('./functions')

const nodeModel = ({ createContentDigest, createNodeId }) => (
  codes,
  treePath
) => {
  const pathSplitted = treePath.split('.')
  const pathAsData = pathSplitted[0].replace(/\\/g, '/')
  const id = createNodeId(nodeIdString(pathAsData))

  return Object.assign(
    {},
    {
      id,
      parent: null,
      path: pathAsData,
      codes: {
        ...codes,
      },
      internal: {
        type: `Preview`,
        content: JSON.stringify(codes),
        contentDigest: createContentDigest(codes),
      },
    }
  )
}

module.exports = nodeModel
