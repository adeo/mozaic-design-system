const dirTree = require('directory-tree')
const fs = require('fs')
const chokidar = require(`chokidar`)
const createFSMachine = require('./create-fsmachine')

const debounce = (fnc, tm) => {
  let time
  return function () {
    clearTimeout(time)
    time = setTimeout(() => {
      fnc.apply(this, arguments)
    }, tm)
  }
}

const previewsParam = process.argv
  .filter((val) => val.startsWith('previews='))
  .pop()

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
    store,
  } = tools
  const { createNode, deleteNode } = actions
  /* configOptions:
    { previewsFiles: 'src/pages/** /*.preview.*',
    rootPath: 'src/pages',
    stylesPath: 'packages/styles/** /*.scss' }
  */

  const buildNodeData = nodeModel({ createContentDigest, store, createNodeId })

  const compileCss = compileCssnCreateNode(reporter, createNode, buildNodeData)

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

  const buildPreviews = (addedFile) => {
    console.log('-----------------------------')
    console.log(`--- building ${addedFile || 'all previews'} ---`)
    console.log('-----------------------------')

    let previews = {}

    const buildPath = previewsParam
      ? `${configOptions.rootPath}/${previewsParam.split('=')[1]}`
      : configOptions.rootPath

    const tree = addedFile ? { path: addedFile } : dirTree(buildPath)

    createPreviewsObject(tree, previews)

    const previewsPromises = Object.keys(previews).map((key) => {
      const codes = previews[key]
      if (codes.scss) {
        return compileCss(codes, key, key.replace('.scss', '.css'))
      }
      return createNode(buildNodeData(codes, key))
    })

    return Promise.all(previewsPromises)
  } // buildPreviews

  watcher.on(`add`, (path) => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_PREVIEW_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        buildPreviews(path)
          .then(reporter.success(`previews built`))
          .catch((err) => reporter.error(err))
        reporter.info(`added PREVIEW file at ${path}`)
      }
    }
  })

  const onChange = (path) => {
    // path: src/pages/Components/Buttons/previews/basic.preview.html
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`changed PREVIEW file at ${path}`)

      // Avoid reloading all previews during dev
      const globalStylePath = 'packages/styles/'
      if (path.replace(/\\/g, '/').indexOf(globalStylePath) > -1) {
        return buildPreviews(path)
          .then(reporter.success(`previews built`))
          .catch((err) => reporter.error(err))
      }

      const content = fs.readFileSync(path, 'utf8')
      const pathSplitted = path.split('.')
      const fileext = pathSplitted[2]
      const nodeId = createNodeId(nodeIdString(pathSplitted[0]))
      let node = getNode(nodeId)

      node.codes[fileext] = content
      if (fileext === 'scss') {
        return compileCss(node.codes, path, path.replace('.scss', '.css'))
      } else {
        createNode(buildNodeData(node.codes, path))
      }
    }
  }
  watcher.on(`change`, onChange)

  const unlink = (path) => {
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
      deleteNode(node)
    }
  }

  watcher.on(`unlink`, unlink)

  watcher.on(`addDir`, (path) => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_PREVIEW_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        buildPreviews()
          .then(reporter.success(`previews built`))
          .catch((err) => reporter.error(err))
        reporter.info(`added directory at ${path}`)
      }
    }
  })

  watcher.on(`unlinkDir`, (path) => {
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`PREVIEW directory deleted at ${path}`)
    }

    const node = getNode(createNodeId(path))

    if (node) {
      deleteNode(node)
    }
  })

  return new Promise((resolve, reject) => {
    watcher.on(`ready`, () => {
      currentState = fsMachine.transition(
        currentState.value,
        `CHOKIDAR_PREVIEW_READY`
      )
      buildPreviews()
        .then(reporter.success(`previews built`))
        .then(resolve, reject)
    })
  })
}
