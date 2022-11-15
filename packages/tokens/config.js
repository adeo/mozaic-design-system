const config = require('./src/config/utils')

module.exports = ({ brand, tokens }) => {
  console.log('brand:', brand)
  console.log('source:', tokens)

  // const source = userTokensSourcePath ? [getPath(tokens), `${userTokensSourcePath}/**/*.json`] : [getPath(tokens)]

  const setTokensBuildPath = (platform) =>
    userTokensBuildPath
      ? `${userTokensBuildPath}${platform}/`
      : getPath(`dist/${brand}/${platform}`) + '/'

  const platforms = {
    css: {
      transformGroup: 'css',
      buildPath: setTokensBuildPath('css'),
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
      buildPath: setTokensBuildPath('scss'),
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
      buildPath: setTokensBuildPath('android'),
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
      buildPath: setTokensBuildPath('js'),
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
      buildPath: setTokensBuildPath('ios'),
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
      buildPath: setTokensBuildPath('ios'),
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

  return {
    source: [getPath(tokens)],
    platforms: setPlatforms(platforms, allowedPlatforms),
    action: customActions,
  }
}
