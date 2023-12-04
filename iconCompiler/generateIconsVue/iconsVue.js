const { parse } = require('svg-parser')
const { createComponentName, convertPxToRem } = require('../utils/tools')

const vueIconComponent = ({ fileName, data }) => {
  const parsedFileName = `${createComponentName(fileName)}`

  const sizePx = fileName.replace('.svg', '').split('_').pop()

  const size = convertPxToRem(sizePx.replace('px', ''))
  const parsedData = data.replace(
    '<svg',
    `<svg aria-hidden="true" :fill="color"`
  )
  const parsedSVG = parse(parsedData)
  const viewBox = parsedSVG.children[0].properties.viewBox

  const content = parsedSVG.children[0].children

  if (!size || !content || !viewBox || content.length === 0) {
    console.error(
      `✗ ERROR : there was a problem building ${fileName} for vueJS`
    )

    return null
  }
  return `<template>${parsedData}</template>
<script >
export default {
    name: '${parsedFileName}',
    props: {
    /**
     * Icon color
     */
    color: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>
`
}

const vueIconsIndex = (icon) => `${vueIconComponent(icon, icon.data)}`

module.exports = vueIconsIndex
