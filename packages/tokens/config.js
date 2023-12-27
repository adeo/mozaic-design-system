const path = require('path')
const CM = require('@mozaic-ds/configuration-manager')
const customActions = require('./src/actions/actions.js')

const userTokensSourcePath = CM.getKey('tokens.localTokensSrcPath')
const userTokensBuildPath = CM.getKey('tokens.localTokensExportPath')
const userTokensPlatforms = CM.getKey('tokens.platforms')

const getPath = (localRelativePath) => {
  return path.relative(process.cwd(), `${__dirname}/${localRelativePath}`)
}

// Source
const defaultTokensSourcePath = getPath('src/tokens/leroymerlin/**/*.json')

function getTokensSourcePath(src) {
  let source = ''

  if (src) {
    source = [defaultTokensSourcePath, getPath(src)]
  } else {
    source = userTokensSourcePath
      ? [defaultTokensSourcePath, `${userTokensSourcePath}**/*.json`]
      : [defaultTokensSourcePath]
  }

  return source
}

// Platform
const defaultPlatforms = ['scss']
const allowedPlatforms = userTokensPlatforms
  ? defaultPlatforms.concat(userTokensPlatforms)
  : defaultPlatforms

const getTokensBuildPath = (brand, platform) => {
  return userTokensBuildPath
    ? `${userTokensBuildPath}${brand}/${platform}/`
    : getPath(`build/${brand}/${platform}`) + '/'
}

function getPlatforms(brand) {
  const platformsObject = {}
  const platforms = {
    scss: {
      transformGroup: 'scss',
      buildPath: getTokensBuildPath(brand, 'scss'),
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
    css: {
      transformGroup: 'css',
      buildPath: getTokensBuildPath(brand, 'css'),
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
    android: {
      transformGroup: 'android',
      buildPath: getTokensBuildPath(brand, 'android'),
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
      buildPath: getTokensBuildPath(brand, 'js'),
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
      buildPath: getTokensBuildPath(brand, 'ios'),
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
      buildPath: getTokensBuildPath(brand, 'ios'),
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

  allowedPlatforms.forEach(function (platform) {
    if (platforms.hasOwnProperty(platform)) {
      platformsObject[platform] = platforms[platform]
    } else {
      console.error(
        `✗ ERROR : The requested ${platform} platform is not an allowed platform.`
      )
    }
  })

  return platformsObject
}

// Config Object
function getStyleDictionaryConfig(brand, tokens) {
  return {
    source: getTokensSourcePath(tokens),
    platforms: getPlatforms(brand),
    action: customActions,
  }
}

module.exports = ({ brand, tokens }) => getStyleDictionaryConfig(brand, tokens)
