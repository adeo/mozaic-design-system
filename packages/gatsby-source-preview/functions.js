const fs = require(`fs`)
const cssCompiler = require('@mozaic-ds/css-dev-tools/css-pipeline.js')

// create string for node id creation
const nodeIdString = path => {
  return `preview-${path}`
}

const compileCssnCreateNode = (
  reporter,
  createNode,
  createNodeId,
  buildNodeData
) => (codes, pathFrom, pathTo) => {
  const nodeId = createNodeId(nodeIdString(pathFrom))
  return cssCompiler(codes.scss, pathFrom, pathTo)
    .then(res => {
      reporter.success(`preview built: ${pathFrom}`)
      codes.css = res.css
      createNode(buildNodeData(nodeId, codes, pathFrom.replace(/\\/g, '/')))
    })
    .catch(error =>
      createNode(
        buildNodeData(
          nodeId,
          { html: error, css: '' },
          pathFrom.replace(/\\/g, '/')
        )
      )
    )
}

const createPreviewsObject = (tree, previews) => {
  /* tree:
    { path:
      'src/pages/Foundations/Typography/ScaleAndSizes/previews/font-scale.preview.html',
      name: 'font-scale.preview.html',
      size: 809,
      extension: '.html',
      type: 'file' }
  */
  if (tree.path.includes('.preview.')) {
    const naming = tree.path.split('.')

    const content = fs.readFileSync(tree.path, 'utf8')

    if (previews[naming[0]] === undefined) {
      previews[naming[0]] = {
        html: '',
        css: '',
        scss: '',
        json: '',
        js: '',
      }
    }
    previews[naming[0]][naming[2]] = content
  }

  if (Array.isArray(tree.children)) {
    tree.children.forEach(child => createPreviewsObject(child, previews))
  }
}

module.exports = {
  nodeIdString,
  createPreviewsObject,
  compileCssnCreateNode,
}
