const { createComponentName, convertPxToRem } = require('../utils/tools')

const fileHeader = `/*
DON'T EDIT THIS FILE
It was auto-generated by "iconCompiler" script
*/

import React from 'react'`

const iconContent = ({ fileName, data }) => {
  const size = fileName.replace('.svg', '').split('_').pop()

  const parsedData = data.replace(
    '<svg',
    `<svg aria-hidden="true" width={size} height={size} {...rest} fill={fill}`
  )
  const parsedName = createComponentName(fileName)

  return `export const ${parsedName} = 
    ({fill, size = '${convertPxToRem(size)}', ...rest}) => (${parsedData})`
}

const reactIconsIndex = (iconList) => `${fileHeader}

${iconList.map(iconContent).join('\n\n')}`

module.exports = reactIconsIndex
