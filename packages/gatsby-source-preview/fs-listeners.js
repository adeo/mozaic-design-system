const chokidar = require(`chokidar`)
const { nodeIdString, getRelatedFiles } = require('./functions')

// set filesystem watcher
const fsWatcher = function({
  configOptions,
  reporter,
  getNode,
  createNodeId,
  deleteNode,
  buildPreviews,
}) {
  // TODO remove
  console.log('THIS', this)

  const { currentState: currentStateFnc } = this

  const watcher = chokidar.watch(
    [configOptions.previewsFiles, configOptions.stylesPath],
    {}
  )

  const currentState = currentStateFnc()

  watcher.on(`add`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_PREVIEW_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        buildPreviews().catch(err => reporter.error(err))
        reporter.info(`added PREVIEW file at ${path}`)
      }
    }
  })
  watcher.on(`change`, function(path) {
    // path: src/pages/Components/Buttons/previews/basic.preview.html

    //TODO remove
    console.log('onchange', path, currentStateFnc())

    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      const relatedFiles = getRelatedFiles(path)
      buildPreviews(relatedFiles).catch(err => reporter.error(err))
      reporter.info(`changed PREVIEW file at ${path}`)
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

  // to be used further
  return watcher
}

module.exports = fsWatcher
