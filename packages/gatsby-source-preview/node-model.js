const nodeModel = createContentDigest => (id, codes, treePath) =>
  Object.assign(
    {},
    {
      id,
      path: treePath,
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

module.exports = nodeModel
