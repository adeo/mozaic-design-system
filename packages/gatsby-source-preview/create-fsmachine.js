const { createMachine } = require('xstate')

const createFSMachine = () =>
  createMachine({
    id: 'fsMachine',
    key: `emitFSEvents`,
    type: 'parallel',
    strict: true,
    predictableActionArguments: true,
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

module.exports = createFSMachine
