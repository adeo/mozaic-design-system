const CM = require('@mozaic-ds/configuration-manager')
const path = require('path')

const getPath = localRelativePath =>
  path.relative(process.cwd(), `${__dirname}/${localRelativePath}`)

const getBuildPath = path => getPath(path) + '/'

const localSrcPath = CM.getKey('tokens.localTokensSrcPath')

const localTokensExportPath = CM.getKey('tokens.localTokensExportPath')

const source = localSrcPath
  ? [getPath('properties/**/*.json'), `${localSrcPath}properties/**/*.json`]
  : [getPath('properties/**/*.json')]

const setLocalTokensExportPath = dir =>
  localTokensExportPath
    ? `${localTokensExportPath}${dir}/`
    : getBuildPath(`build/${dir}/`)

const config = {
  source,
  platforms: {
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
  },
}

console.log(JSON.stringify(config, 0, 2))

module.exports = config
