const path = require('path')
const destPath = (strPath) => path.relative(process.cwd(), strPath)

module.exports = {
  sourcePaths: {
    svg: destPath('src/icons/SVG'),
  },
  outputPaths: {
    data: destPath('src/data'),
    svg: destPath('packages/icons/svg'),
    react: destPath('packages/icons/react'),
    vue: destPath('packages/icons/vue'),
    svelte: destPath('packages/icons/svelte'),
    js: destPath('packages/icons/js'),
  },
}
