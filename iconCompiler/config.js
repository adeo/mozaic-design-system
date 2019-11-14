const path = require('path')
const currentDir = process.cwd()

module.exports = {
  iconsOutputPath: {
    svg: path.join(currentDir, 'packages/icons/svg/'),
    react: path.join(currentDir, 'packages/icons/react/'),
    vue: path.join(currentDir, 'packages/icons/vue/'),
  },
}
