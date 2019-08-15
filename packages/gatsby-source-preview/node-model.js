const nodeModel = createContentDigest => (id, codes, treePath) => {
  const pathSplitted = treePath.split('.')

  return Object.assign(
    {},
    {
      id,
      path: pathSplitted[0].replace(/\\/g, '/'),
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
