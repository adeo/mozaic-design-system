const fs = require(`fs`)
const path = require('path')
const cssCompiler = require('@mozaic-ds/css-dev-tools/css-pipeline.js')

// create string for node id creation
const nodeIdString = path => {
  path = path.replace(/\\/g, '/')
  return `preview-${path}`
}

const compileCssnCreateNode = (reporter, createNode, buildNodeData) => (
  codes,
  pathFrom,
  pathTo
) => {
  return cssCompiler(
    codes.scss,
    path.normalize(pathFrom),
    path.normalize(pathTo)
  )
    .then(res => {
      codes.css = res.css
      createNode(buildNodeData(codes, pathFrom))
    })
    .catch(error =>
      createNode(buildNodeData({ html: error, css: '' }, pathFrom))
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
