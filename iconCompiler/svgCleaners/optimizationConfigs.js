module.exports['monochromOptim'] = {
  custom: (data) =>
    data
      .replace(/<style>(.*)<\/style>/g, '')
      .replace(/<defs>(.*)<\/defs>/g, '')
      .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
      .replace(/data-name="[a-zA-Z0-9:;\.\s\(\)\-\,\/]*"/gi, '')
      .replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi, '')
      .replace(/<g id="Square">.*?<\/g>/gi, ''),

  svgoPlugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { minifyStyles: true },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: false },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    { mergePaths: true },
    { convertShapeToPath: false },
    { sortAttrs: true },
    { removeDimensions: true },
  ],
}

module.exports['colorOptim'] = {
  custom: (data) =>
    data
      .replace(/<style>(.*)<\/style>/g, '')
      .replace(/<defs>(.*)<\/defs>/g, '')
      .replace(/class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '')
      .replace(/data-name="[a-zA-Z0-9:;\.\s\(\)\-\,\/]*"/gi, '')
      .replace(/fill="[a-zA-Z0 -9:;\.\s\(\)\-\,]*"/gi, '')
      .replace(/<g id="Square">.*?<\/g>/gi, ''),

  svgoPlugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { minifyStyles: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: false },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    { mergePaths: true },
    { convertShapeToPath: false },
    { sortAttrs: true },
    { removeDimensions: true },
    { inlineStyles: true },
  ],
}
