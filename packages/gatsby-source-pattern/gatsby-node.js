const dirTree = require('directory-tree')
const path = require('path')

const chokidar = require(`chokidar`)
const fs = require(`fs`)
const { Machine } = require(`xstate`)

const cssCompiler = require('@gardencss/css-dev-tools/css-pipeline.js')

const createFSMachine = () =>
  Machine({
    key: `emitFSEvents`,
    parallel: true,
    strict: true,
    states: {
      CHOKIDAR: {
        initial: `CHOKIDAR_PATTERN_NOT_READY`,
        states: {
          CHOKIDAR_PATTERN_NOT_READY: {
            on: {
              CHOKIDAR_PATTERN_READY: `CHOKIDAR_PATTERN_WATCHING`,
              BOOTSTRAP_FINISHED: `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`,
            },
          },
          CHOKIDAR_PATTERN_WATCHING: {
            on: {
              BOOTSTRAP_FINISHED: `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`,
              CHOKIDAR_PATTERN_READY: `CHOKIDAR_PATTERN_WATCHING`,
            },
          },
          CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED: {
            on: {
              CHOKIDAR_PATTERN_READY: `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`,
            },
          },
        },
      },
    },
  })

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest, reporter, emitter },
  configOptions
) => {
  const fsMachine = createFSMachine()
  let currentState = fsMachine.initialState

  emitter.on(`BOOTSTRAP_FINISHED`, () => {
    currentState = fsMachine.transition(
      currentState.value,
      `BOOTSTRAP_FINISHED`
    )
  })

  const watcher = chokidar.watch(
    [configOptions.path, configOptions.stylesPath],
    {}
  )

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const buildPattern = () =>
    new Promise((resolve, reject) => {
      const { createNode } = actions
      const tree = dirTree(configOptions.path)

      let patterns = {}

      const processDirectoryTree = tree => {
        if (tree.path.includes('.pattern.')) {
          const naming = tree.path.split('.')
          const content = fs.readFileSync(tree.path, 'utf8')

          if (patterns[naming[0]] === undefined) {
            patterns[naming[0]] = {
              html: '',
              css: '',
              scss: '',
              json: '',
              js: '',
            }
          }
          patterns[naming[0]][naming[2]] = content
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
              type: `Pattern`,
              content: JSON.stringify(codes),
              contentDigest: createContentDigest(codes),
            },
          }
        )

      Object.keys(patterns).map(key => {
        const codes = patterns[key]
        const nodeId = createNodeId(`pattern-${key}`)

        if (codes.scss && codes.scss !== '') {
          cssCompiler(codes.scss, key, key.replace('.scss', '.css'))
            .then(res => {
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
  const flushPathQueue = () => {
    let queue = pathQueue.slice()
    pathQueue = []
    return Promise.all(queue.map(buildPattern))
  }

  watcher.on(`add`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_PATTERN_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        reporter.info(`added pattern file at ${path}`)
      }
      buildPattern().catch(err => reporter.error(err))
    } else {
      pathQueue.push(path)
    }
  })

  watcher.on(`change`, path => {
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`changed pattern file at ${path}`)
    }
    buildPattern().catch(err => reporter.error(err))
  })

  watcher.on(`unlink`, path => {
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`pattern file deleted at ${path}`)
    }
    const node = getNode(createNodeId(path))
    // It's possible the file node was never created as sometimes tools will
    // write and then immediately delete temporary files to the file system.
    if (node) {
      deleteNode({ node })
    }
  })

  watcher.on(`addDir`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_PATTERN_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        reporter.info(`added directory at ${path}`)
      }
      buildPattern().catch(err => reporter.error(err))
    } else {
      pathQueue.push(path)
    }
  })

  watcher.on(`unlinkDir`, path => {
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_PATTERN_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`pattern directory deleted at ${path}`)
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
        `CHOKIDAR_PATTERN_READY`
      )
      pathQueue.push('test')
      flushPathQueue().then(resolve, reject)
    })
  })
}
