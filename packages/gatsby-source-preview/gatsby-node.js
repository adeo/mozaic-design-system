const dirTree = require('directory-tree')
// const path = require('path')

const chokidar = require(`chokidar`)
const fs = require(`fs`)
const { Machine } = require(`xstate`)

const cssCompiler = require('@mozaic-ds/css-dev-tools/css-pipeline.js')

// create string for node id creation
const nodeIdString = path => {
  return `preview-${path}`
}

const createFSMachine = () =>
  Machine({
    key: `emitFSEvents`,
    parallel: true,
    strict: true,
    states: {
      CHOKIDAR: {
        initial: `CHOKIDAR_PREVIEW_NOT_READY`,
        states: {
          CHOKIDAR_PREVIEW_NOT_READY: {
            on: {
              CHOKIDAR_PREVIEW_READY: `CHOKIDAR_PREVIEW_WATCHING`,
              BOOTSTRAP_FINISHED: `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`,
            },
          },
          CHOKIDAR_PREVIEW_WATCHING: {
            on: {
              BOOTSTRAP_FINISHED: `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`,
              CHOKIDAR_PREVIEW_READY: `CHOKIDAR_PREVIEW_WATCHING`,
            },
          },
          CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED: {
            on: {
              CHOKIDAR_PREVIEW_READY: `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`,
            },
          },
        },
      },
    },
  })

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

  const buildPreviews = changedFile =>
    new Promise((resolve, reject) => {
      console.log('-----------------------------')
      console.log(`--- building ${changedFile || 'all previews'} ---`)
      console.log('-----------------------------')

      let tree
      if (changedFile) {
        tree = { path: changedFile }
      } else {
        tree = dirTree(configOptions.rootPath)
      }

      let previews = {}

      const processDirectoryTree = tree => {
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
          tree.children.forEach(child => processDirectoryTree(child))
        }
      }

      processDirectoryTree(tree)

      const buildNodeData = (id, codes, treePath) =>
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

      Object.keys(previews).map(key => {
        const codes = previews[key]
        // const nodeId = createNodeId(`preview-${key}`)
        const nodeId = createNodeId(nodeIdString(key))

        if (codes.scss && codes.scss !== '') {
          cssCompiler(codes.scss, key, key.replace('.scss', '.css'))
            .then(res => {
              reporter.success(`preview builded: ${key}`)
              codes.css = res.css
              resolve(
                createNode(
                  buildNodeData(nodeId, codes, key.replace(/\\/g, '/'))
                )
              )
            })
            .catch(error =>
              resolve(
                createNode(
                  buildNodeData(
                    nodeId,
                    { html: error, css: '' },
                    key.replace(/\\/g, '/')
                  )
                )
              )
            )
        } else {
          reporter.success(`preview builded: ${key}`)
          resolve(
            createNode(buildNodeData(nodeId, codes, key.replace(/\\/g, '/')))
          )
        }
      })
    })

  // For every path that is reported before the 'ready' event, we throw them
  // into a queue and then flush the queue when 'ready' event arrives.
  // After 'ready', we handle the 'add' event without putting it into a queue.
  let pathQueue = []

  // const flushPathQueue = () => {
  //   buildPreviews()
  // }

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
  watcher.on(`change`, path => {
    // path: src/pages/Components/Buttons/previews/basic.preview.html
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PREVIEW_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      buildPreviews(path).catch(err => reporter.error(err))
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
