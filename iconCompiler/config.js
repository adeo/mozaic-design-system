const path = require('path')
const destPath = (strPath) => path.relative(process.cwd(), strPath)

module.exports = {
  sourcePaths: {
    svg: destPath('src/icons/SVG'),
    svgColor: destPath('src/icons/COLORS/SVG'),
    svgColorToGatsby: destPath('src/icons/COLORS/SVG'),
    pdf: destPath('src/icons/PDF'),
    pdfColor: destPath('src/icons/COLORS/PDF'),
  },
  outputPaths: {
    data: destPath('src/data'),
    svg: destPath('packages/icons/svg'),
    svgColor: destPath('packages/icons/svg-color'),
    svgToGatsby: destPath('static/icons/monochrom'),
    svgColorToGatsby: destPath('static/icons/color'),
    pdf: destPath('packages/icons/pdf'),
    pdfColor: destPath('packages/icons/pdf-color'),
    react: destPath('packages/icons/react'),
    vue: destPath('packages/icons/vue'),
    svelte: destPath('packages/icons/svelte'),
    js: destPath('packages/icons/js'),
  },
}
