const fs = require(`fs`)
const cssCompiler = require('@mozaic-ds/css-dev-tools/css-pipeline.js')

// create string for node id creation
const nodeIdString = path => {
  return `preview-${path}`
}

// creating a list of files related to a file being changed
// const getRelatedFiles = path => {
//   // path: src/pages/Components/Buttons/previews/basic.preview.html
//   if (path) {
//     const filetypes = ['html', 'css', 'scss', 'json', 'js']
//     const base = path.split('.preview.')[0]
//     const relatedFiles = filetypes.map(elem => {
//       return base + '.preview.' + elem
//     })

//     return relatedFiles
//   }

//   return false
// }

const processDirectoryTree = (tree, previews) => {
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
    let content
    try {
      content = fs.readFileSync(tree.path, 'utf8')
    } catch (e) {
      content = ''
    }

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
    tree.children.forEach(child => processDirectoryTree(child, previews))
  }
}

module.exports = {
  nodeIdString,
  processDirectoryTree,
  // getRelatedFiles
}
