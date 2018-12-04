const dirTree = require('directory-tree')

const chokidar = require(`chokidar`)
const fs = require(`fs`)
const path = require(`path`)
const { Machine } = require(`xstate`)

const sass = require('node-sass')

const createFSMachine = () =>
  Machine({
    key: `emitFSEvents`,
    parallel: true,
    strict: true,
    states: {
      CHOKIDAR: {
        initial: `CHOKIDAR_NOT_READY`,
        states: {
          CHOKIDAR_NOT_READY: {
            on: {
              CHOKIDAR_READY: `CHOKIDAR_WATCHING`,
              BOOTSTRAP_FINISHED: `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`,
            },
          },
          CHOKIDAR_WATCHING: {
            on: {
              BOOTSTRAP_FINISHED: `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`,
              CHOKIDAR_READY: `CHOKIDAR_WATCHING`,
            },
          },
          CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED: {
            on: {
              CHOKIDAR_READY: `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`,
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
            patterns[naming[0]] = {}
          }
          patterns[naming[0]][naming[2]] = content
        }

        if (Array.isArray(tree.children)) {
          tree.children.forEach(child => processDirectoryTree(child))
        }
      }

      processDirectoryTree(tree)

      const errorCSS = err => `
        body { 
          background: red!important;
          font-family: sans-serif;
          text-align: center;
          padding: 30px;
        }
        body:after { 
          content: 'sass building error: ${err.message}'; 
          font-size: 26px; color: #FFF; 
        }
      `

      Object.keys(patterns).map(key => {
        const value = patterns[key]

        if (value.scss) {
          let css = '// sass error'

          try {
            css = sass
              .renderSync({
                data: value.scss,
                includePaths: ['src/styles/'],
              })
              .css.toString('utf8')
          } catch (err) {
            css = errorCSS(err)

            console.error(
              `SASS ERROR: ${err.message} \n from : ${path.relative(
                process.cwd(),
                err.file
              )}`
            )
          }

          value.css = css
        }

        const nodeId = createNodeId(`pattern-${key}`)

        let nodeData = Object.assign(
          {},
          {
            id: nodeId,
            path: key,
            codes: {
              ...value,
            },
            internal: {
              type: `Pattern`,
              content: JSON.stringify(value),
              contentDigest: createContentDigest(value),
            },
          }
        )

        resolve(createNode(nodeData))
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
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR === `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`
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
      currentState.value.CHOKIDAR === `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`changed pattern file at ${path}`)
    }
    buildPattern().catch(err => reporter.error(err))
  })

  watcher.on(`unlink`, path => {
    if (
      currentState.value.CHOKIDAR === `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`
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
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR === `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`
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
      currentState.value.CHOKIDAR === `CHOKIDAR_WATCHING_BOOTSTRAP_FINISHED`
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
      currentState = fsMachine.transition(currentState.value, `CHOKIDAR_READY`)
      flushPathQueue().then(resolve, reject)
    })
  })
}
