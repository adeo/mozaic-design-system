const dirTree = require('directory-tree')
// const path = require('path')
const fs = require('fs')

const chokidar = require(`chokidar`)
const cssCompiler = require('@mozaic-ds/css-dev-tools/css-pipeline.js')

const createFSMachine = require('./create-fsmachine')
const { nodeIdString, processDirectoryTree } = require('./functions')
const nodeModel = require('./node-model')

exports.sourceNodes = (tools, configOptions) => {
  const {
    actions,
    createNodeId,
    createContentDigest,
    reporter,
    emitter,
    getNode,
  } = tools
  const { createNode, deleteNode } = actions
  /* configOptions:
    { previewsFiles: 'src/pages/** /*.preview.*',
    rootPath: 'src/pages',
    stylesPath: 'packages/styles/** /*.scss' }
  */

  const buildNodeData = nodeModel(createContentDigest)

  const fsMachine = createFSMachine()
  let currentState = fsMachine.initialState

  emitter.on(`BOOTSTRAP_FINISHED`, () => {
    currentState = fsMachine.transition(
      currentState.value,
      `BOOTSTRAP_FINISHED`
    )
  })

  const watcher = chokidar.watch(
    [configOptions.previewsFiles, configOptions.stylesPath],
    {}
  )

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const buildPreviews = addedFile => {
    console.log('-----------------------------')
    console.log(`--- building ${addedFile || 'all previews'} ---`)
    console.log('-----------------------------')

    let previews = {}

    const tree = addedFile
      ? { path: addedFile }
      : dirTree(configOptions.rootPath)

    processDirectoryTree(tree, previews)

    const previewsPromises = Object.keys(previews).map(key => {
      const codes = previews[key]
      const nodeId = createNodeId(nodeIdString(key))
      const replacedKey = key.replace(/\\/g, '/')

      if (codes.scss) {
        return cssCompiler(codes.scss, key, key.replace('.scss', '.css'))
          .then(res => {
            reporter.success(`preview builded: ${key}`)
            codes.css = res.css
            createNode(buildNodeData(nodeId, codes, replacedKey))
          })
          .catch(error =>
            createNode(
              buildNodeData(nodeId, { html: error, css: '' }, replacedKey)
            )
          )
      }
      reporter.success(`preview builded: ${key}`)
      return createNode(buildNodeData(nodeId, codes, replacedKey))
    })

    return Promise.all(previewsPromises)
  } // buildPreviews

  watcher.on(`add`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_PREVIEW_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        buildPreviews(path).catch(err => reporter.error(err))
        reporter.info(`added PREVIEW file at ${path}`)
      }
    }
  })
  watcher.on(`change`, path => {
    // path: src/pages/Components/Buttons/previews/basic.preview.html
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`changed PREVIEW file at ${path}`)

      path = path.replace('\\', '/')
      const pathSplitted = path.split('.')
      const fileext = pathSplitted[2]
      const basepath = pathSplitted[0]
      const nodeId = createNodeId(nodeIdString(pathSplitted[0]))
      let node = getNode(nodeId)
      const content = fs.readFileSync(path, 'utf8')
      node.codes[fileext] = content
      if (fileext === 'scss') {
        cssCompiler(node.codes.scss, path, path.replace('.scss', '.css'))
          .then(res => {
            reporter.success(`preview builded: ${path}`)
            node.codes.css = res.css
            //TODO remove
            console.log('node223', node)
            createNode(buildNodeData(nodeId, node.codes, basepath))
          })
          .catch(error =>
            createNode(
              buildNodeData(nodeId, { html: error, css: '' }, basepath)
            )
          )
      } else {
        node = buildNodeData(nodeId, node.codes, basepath)
        createNode(node)
        reporter.success(`preview builded: ${path}`)
      }
    }
  })

  watcher.on(`unlink`, path => {
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`PREVIEW file deleted at ${path}`)
    }

    const node = getNode(createNodeId(nodeIdString(path.split('.')[0])))
    // It's possible the file node was never created as sometimes tools will
    // write and then immediately delete temporary files to the file system.
    if (node) {
      deleteNode({ node })
    }
  })

  watcher.on(`addDir`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_PREVIEW_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        buildPreviews().catch(err => reporter.error(err))
        reporter.info(`added directory at ${path}`)
      }
    }
  })

  watcher.on(`unlinkDir`, path => {
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`PREVIEW directory deleted at ${path}`)
    }

    const node = getNode(createNodeId(path))

    if (node) {
      deleteNode({ node })
    }
  })

  return new Promise((resolve, reject) => {
    watcher.on(`ready`, () => {
      currentState = fsMachine.transition(
        currentState.value,
        `CHOKIDAR_PREVIEW_READY`
      )
      buildPreviews().then(resolve, reject)
    })
  })
}
