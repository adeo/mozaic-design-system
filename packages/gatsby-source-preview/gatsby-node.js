const dirTree = require('directory-tree')
const fs = require('fs')
const chokidar = require(`chokidar`)
const createFSMachine = require('./create-fsmachine')
const {
  nodeIdString,
  createPreviewsObject,
  compileCssnCreateNode,
} = require('./functions')
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

  const compileCss = compileCssnCreateNode(
    reporter,
    createNode,
    createNodeId,
    buildNodeData
  )

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

    createPreviewsObject(tree, previews)

    const previewsPromises = Object.keys(previews).map(key => {
      const codes = previews[key]
      if (codes.scss) {
        return compileCss(codes, key, key.replace('.scss', '.css'))
      }
      reporter.success(`preview built: ${key}`)
      return createNode(buildNodeData(nodeId, codes, key))
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

      // is global style? Just rebuild everything!
      const globalStylePath = 'packages/styles/'
      if (path.replace(/\\/g, '/').indexOf(globalStylePath) > -1) {
        return buildPreviews().catch(err => reporter.error(err))
      }

      const pathSplitted = path.split('.')
      const fileext = pathSplitted[2]
      const nodeId = createNodeId(nodeIdString(pathSplitted[0]))
      let node = getNode(nodeId)
      const content = fs.readFileSync(path, 'utf8')
      node.codes[fileext] = content
      if (fileext === 'scss') {
        return compileCss(node.codes, path, path.replace('.scss', '.css'))
      } else {
        createNode(buildNodeData(nodeId, { ...node.codes }, path))
        reporter.success(`preview built: ${path}`)
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
