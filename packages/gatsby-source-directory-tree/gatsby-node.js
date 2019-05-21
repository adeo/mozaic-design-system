const dirTree = require('directory-tree')
const chokidar = require(`chokidar`)
const fs = require(`fs`)
const { Machine } = require(`xstate`)

const createFSMachine = () =>
  Machine({
    key: `emitFSEvents`,
    parallel: true,
    strict: true,
    states: {
      CHOKIDAR: {
        initial: `CHOKIDAR_DIR_TREE_NOT_READY`,
        states: {
          CHOKIDAR_DIR_TREE_NOT_READY: {
            on: {
              CHOKIDAR_DIR_TREE_READY: `CHOKIDAR_DIR_TREE_WATCHING`,
              BOOTSTRAP_FINISHED: `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`,
            },
          },
          CHOKIDAR_DIR_TREE_WATCHING: {
            on: {
              BOOTSTRAP_FINISHED: `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`,
              CHOKIDAR_DIR_TREE_READY: `CHOKIDAR_DIR_TREE_WATCHING`,
            },
          },
          CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED: {
            on: {
              CHOKIDAR_DIR_TREE_READY: `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`,
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

  const watcher = chokidar.watch([configOptions.path], {})

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const buildSourceDirectoryTree = () =>
    new Promise((resolve, reject) => {
      const { createNode } = actions
      const tree = dirTree(configOptions.path, {
        normalizePath: true,
        exclude: /Previews/,
        extensions: /^(.*\.(?!(htm|html|css|scss|jpg|png|svg|js)$))?[^.]*$/i,
      })

      console.log(JSON.stringify(tree, 0, 2))

      const processDirectoryTree = (tree, parentNode) => {
        const nodeId = createNodeId(`directory-tree-${tree.path}`)

        const { path, name, size, type } = tree
        let childrenNode = []

        let nodeData = Object.assign(
          {},
          { path: path.replace(process.cwd(), ''), name, size, type },
          {
            id: nodeId,
            parentNode,
            path,
            name,
            size,
            type,
            childrenNode,
            internal: {
              type: `DirectoryTree`,
              content: JSON.stringify({ path, name, size, type }),
              contentDigest: createContentDigest({ path, name, size, type }),
            },
          }
        )

        if (tree.children) {
          childrenNode = processChildren(tree.children, nodeData)
          nodeData.childrenNode = childrenNode
        }

        return nodeData
      }

      const processChildren = (children, parentNode) => {
        let childrenNodes = []

        children.forEach(element => {
          const nodeData = processDirectoryTree(element, parentNode)
          createNode(nodeData)

          const { path, name, size, type, id, childrenNode } = nodeData
          childrenNodes.push({ path, name, size, type, id, childrenNode })
        })

        return childrenNodes
      }

      const nodeData = processDirectoryTree(tree)
      resolve(createNode(nodeData))
    })

  // into a queue and then flush the queue when 'ready' event arrives.
  // After 'ready', we handle the 'add' event without putting it into a queue.

  watcher.on(`add`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_DIR_TREE_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        reporter.info(`added pattern file at ${path}`)
        buildSourceDirectoryTree().catch(err => reporter.error(err))
      }
    }
  })

  watcher.on(`change`, path => {
    if (
      currentState.value.CHOKIDAR ===
      `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`
    ) {
      reporter.info(`changed pattern file at ${path}`)
      buildSourceDirectoryTree().catch(err => reporter.error(err))
    }
  })

  watcher.on(`unlink`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_DIR_TREE_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        reporter.info(`delete file at ${path}`)
        buildSourceDirectoryTree().catch(err => reporter.error(err))
      }
    }
  })

  watcher.on(`addDir`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_DIR_TREE_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        reporter.info(`added directory at ${path}`)
        buildSourceDirectoryTree().catch(err => reporter.error(err))
      }
    }
  })

  watcher.on(`unlinkDir`, path => {
    if (currentState.value.CHOKIDAR !== `CHOKIDAR_DIR_TREE_NOT_READY`) {
      if (
        currentState.value.CHOKIDAR ===
        `CHOKIDAR_DIR_TREE_WATCHING_BOOTSTRAP_FINISHED`
      ) {
        reporter.info(`delete dir at ${path}`)
        buildSourceDirectoryTree().catch(err => reporter.error(err))
      }
    }
  })

  return new Promise((resolve, reject) => {
    watcher.on(`ready`, () => {
      currentState = fsMachine.transition(
        currentState.value,
        `CHOKIDAR_DIR_TREE_READY`
      )
      buildSourceDirectoryTree().then(resolve, reject)
    })
  })
}
