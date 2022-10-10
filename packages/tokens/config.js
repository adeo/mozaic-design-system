const CM = require('@mozaic-ds/configuration-manager')
const path = require('path')
const customActions = require('./actions/actions.js')

const getPath = (localRelativePath) =>
  path.relative(process.cwd(), `${__dirname}/${localRelativePath}`)

const getBuildPath = (path) => getPath(path) + '/'

const preset = CM.getKey('preset')

const localSrcPath = CM.getKey('tokens.localTokensSrcPath')

const localTokensExportPath = CM.getKey('tokens.localTokensExportPath')

const source = localSrcPath
  ? [getPath('properties/**/*.json'), `${localSrcPath}properties/**/*.json`]
  : [getPath('properties/**/*.json')]

const availablePresets = {
  adeo: 'AdeoProperties/**/*.json',
  bricoman: 'BricomanProperties/**/*.json',
}

if (preset) {
  source.splice(1, 0, getPath(availablePresets[preset]))
}

const setLocalTokensExportPath = (dir) =>
  localTokensExportPath
    ? `${localTokensExportPath}${dir}/`
    : getBuildPath(`build/${dir}/`)

const defaultPlatforms = ['scss']
const customPlatforms = CM.getKey('tokens.platforms')
const allowedPlatforms = customPlatforms
  ? defaultPlatforms.concat(customPlatforms)
  : defaultPlatforms
const platforms = {
  css: {
    transformGroup: 'css',
    buildPath: setLocalTokensExportPath('css'),
    files: [
      {
        destination: 'root.scss',
        format: 'css/variables',
        options: {
          showFileHeader: false,
          outputReferences: true,
        },
        filter: {
          attributes: {
            category: 'color',
          },
        },
      },
    ],
    actions: ['cssvariables_to_scss'],
  },
  scss: {
    transformGroup: 'scss',
    buildPath: setLocalTokensExportPath('scss'),
    files: [
      {
        destination: '_tokens.scss',
        format: 'scss/map-deep',
        options: {
          showFileHeader: false,
        },
      },
    ],
  },
  android: {
    transformGroup: 'android',
    buildPath: setLocalTokensExportPath('android'),
    files: [
      {
        destination: 'font_dimens.xml',
        format: 'android/fontDimens',
        options: {
          showFileHeader: false,
        },
      },
      {
        destination: 'colors.xml',
        format: 'android/colors',
        options: {
          showFileHeader: false,
        },
      },
    ],
  },
  js: {
    transformGroup: 'js',
    buildPath: setLocalTokensExportPath('js'),
    files: [
      {
        destination: 'tokensObject.js',
        format: 'javascript/module',
        options: {
          showFileHeader: false,
        },
      },
      {
        format: 'javascript/es6',
        destination: 'tokens.js',
        options: {
          showFileHeader: false,
        },
      },
    ],
  },
  'ios-swift': {
    transformGroup: 'ios-swift',
    buildPath: setLocalTokensExportPath('ios'),
    files: [
      {
        destination: 'StyleDictionaryColor.swift',
        format: 'ios-swift/class.swift',
        options: {
          showFileHeader: false,
        },
        className: 'StyleDictionaryColor',
        type: 'StyleDictionaryColorName',
        options: {
          showFileHeader: false,
        },
        filter: {
          attributes: {
            category: 'color',
          },
        },
      },
      {
        destination: 'StyleDictionarySize.swift',
        format: 'ios-swift/class.swift',
        options: {
          showFileHeader: false,
        },
        className: 'StyleDictionarySize',
        options: {
          showFileHeader: false,
        },
        type: 'float',
        filter: {
          attributes: {
            category: 'size',
          },
        },
      },
    ],
  },
  ios: {
    transformGroup: 'ios',
    buildPath: setLocalTokensExportPath('ios'),
    files: [
      {
        destination: 'StyleDictionaryColor.h',
        format: 'ios/colors.h',
        options: {
          showFileHeader: false,
        },
        className: 'StyleDictionaryColor',
        type: 'StyleDictionaryColorName',
        options: {
          showFileHeader: false,
        },
        filter: {
          attributes: {
            category: 'color',
          },
        },
      },
      {
        destination: 'StyleDictionaryColor.m',
        format: 'ios/colors.m',
        options: {
          showFileHeader: false,
        },
        className: 'StyleDictionaryColor',
        type: 'StyleDictionaryColorName',
        options: {
          showFileHeader: false,
        },
        filter: {
          attributes: {
            category: 'color',
          },
        },
      },
      {
        destination: 'StyleDictionarySize.h',
        format: 'ios/static.h',
        options: {
          showFileHeader: false,
        },
        className: 'StyleDictionarySize',
        options: {
          showFileHeader: false,
        },
        type: 'float',
        filter: {
          attributes: {
            category: 'size',
          },
        },
      },
      {
        destination: 'StyleDictionarySize.m',
        format: 'ios/static.m',
        options: {
          showFileHeader: false,
        },
        className: 'StyleDictionarySize',
        type: 'float',
        options: {
          showFileHeader: false,
        },
        filter: {
          attributes: {
            category: 'size',
          },
        },
      },
    ],
  },
}

function setPlatforms(platforms, allowedPlatforms) {
  const configPlatforms = {}

  allowedPlatforms.forEach(function (platform) {
    if (platforms.hasOwnProperty(platform)) {
      configPlatforms[platform] = platforms[platform]
    }
  })

  return configPlatforms
}

const config = {
  source,
  platforms: setPlatforms(platforms, allowedPlatforms),
  action: customActions,
}

module.exports = config
