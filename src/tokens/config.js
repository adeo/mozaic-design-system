const path = require('path')

const getPath = localRelativePath =>
  path.relative(process.cwd(), `${__dirname}/${localRelativePath}`)

const getBuildPath = path => getPath(path) + '/'

const config = {
  source: [getPath('properties/**/*.json')],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: getBuildPath('build/scss/'),
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
      buildPath: getBuildPath('build/android/'),
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
      buildPath: getBuildPath('build/js/'),
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
    ios: {
      transformGroup: 'ios',
      buildPath: getBuildPath('build/ios/'),
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
  },
}

module.exports = config
