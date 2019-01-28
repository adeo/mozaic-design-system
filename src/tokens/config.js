const path = require('path')

const getPath = localRelativePath =>
  path.relative(process.cwd(), `${__dirname}/${localRelativePath}`)

const getBuildPath = path => getPath(path) + '/'

const config = {
  source: [getPath('properties/**/*.json'), getPath('prop2/**/*.json')],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: getBuildPath('build/scss/'),
      files: [
        {
          destination: '_tokens.scss',
          format: 'sass/map-deep',
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
        },
        {
          destination: 'colors.xml',
          format: 'android/colors',
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
        },
        {
          format: 'javascript/es6',
          destination: 'tokens.js',
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
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionaryColor.m',
          format: 'ios/colors.m',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.h',
          format: 'ios/static.h',
          className: 'StyleDictionarySize',
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
          className: 'StyleDictionarySize',
          type: 'float',
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
