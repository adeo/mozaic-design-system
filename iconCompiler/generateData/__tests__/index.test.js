import fs from 'fs'

import generateIconsData from '../index'
import {
  getInfosFromName,
  generateMonochromListObject,
  generateColorListObject,
  checkPath,
  writeFile,
} from '../lib'

const iconList = [
  {
    data: `<svg></svg>`,
    fileName: 'Navigation_Arrow_Arrow--Top_16px.svg',
    outputPath: 'toto',
  },
  {
    data: `<svg></svg>`,
    fileName: 'Media_FullScreen_24px.svg',
    outputPath: 'toto',
  },
]

describe('getInfosFromName', () => {
  it('getsInfosFromName detect category, size, name, and filename from file name', () => {
    const data = getInfosFromName('Media_FullScreen_16px.svg')
    expect(data).toMatchSnapshot(true)
  })
})

describe('generateMonochromListObject', () => {
  it('generateMonochromListObject return a list of icons with a component name', () => {
    const data = generateMonochromListObject(iconList)
    expect(data).toMatchSnapshot(true)
    expect(data[0].cat).toEqual('Navigation')
    expect(data[0].name).toEqual('Arrow_Arrow--Top')
    expect(data[0].componentName).toEqual('ArrowArrowTop16')
    expect(data[0].size).toEqual('16px')
  })
})

describe('generateColorListObject', () => {
  it('generateColorListObject return a list of icons without a component name', () => {
    const data = generateColorListObject(iconList)
    expect(data).toMatchSnapshot(true)
    expect(data[0].cat).toEqual('Navigation')
    expect(data[0].name).toEqual('Arrow_Arrow--Top')
    expect(data[0].componentName).toBeUndefined()
    expect(data[0].size).toEqual('16px')
  })
})

describe('checkPath', () => {
  it('should call mkdir to create the directory if it does not exist', () => {
    fs.exists = jest.fn((p, cb) => cb(false))
    fs.mkdir = jest.fn()
    checkPath('foo/bar').then(expect(fs.mkdir).toHaveBeenCalled())
  })

  it('should resolve without problem if the directory exist', () => {
    fs.exists = jest.fn((p, cb) => cb(true))
    fs.mkdir = jest.fn()
    checkPath('foo/bar').then(expect(fs.mkdir).not.toHaveBeenCalled())
  })
})

describe('writeFile', () => {
  it('should call fs.writeFile', () => {
    fs.writeFile = jest.fn()
    writeFile('foo/bar').then(expect(fs.writeFile).toHaveBeenCalled())
  })
})

describe('genrateData', () => {
  fs.exists = jest.fn((p, cb) => cb(true))

  it('should call fs.writeFile and write a valid JSON', () => {
    let fileResult
    fs.writeFile = jest.fn((path, data, utf8, callback) => {
      fileResult = data
      callback(false)
    })
    generateIconsData([[...iconList], [...iconList]]).then(() => {
      expect(fs.writeFile).toHaveBeenCalled()
      expect(fileResult).toMatchSnapshot()
    })
  })

  it('should reject errors if data is invalid', () => {
    fs.writeFile = jest.fn((path, data, utf8, callback) => {
      callback(false)
    })
    generateIconsData([[{ foo: 'bar' }], [{ foo: 'bar' }]]).catch(err => {
      expect(err).toBe(
        `generate icons data : the data received seems to be malformed\nTypeError: Cannot read property 'split' of undefined`
      )
    })
  })

  it('should reject errors if file cannot be saved', () => {
    fs.writeFile = jest.fn((path, data, utf8, callback) => {
      callback('error message mock')
    })
    generateIconsData([[...iconList], [...iconList]]).catch(err => {
      expect(err).toBe(`while trying save the file : error message mock`)
    })
  })
})
