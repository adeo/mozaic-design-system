require('dotenv').config()
const fs = require('fs')
const AdmZip = require('adm-zip')
const request = require('request-promise')

const stat = fs.statSync

const lernaData = fs.readFileSync('./lerna.json')
const lerna = JSON.parse(lernaData)

const rawdata = fs.readFileSync('./assets.config.json')
const assets = JSON.parse(rawdata)

function newArchive(zipFileName, pathNames) {
  const zip = new AdmZip()

  pathNames.forEach(path => {
    const p = stat(path)
    if (p.isFile()) {
      zip.addLocalFile(path)
    } else if (p.isDirectory()) {
      const split = path.split('/')
      zip.addLocalFolder(path, split[split.length - 1])
    }
  })

  zip.writeZip(zipFileName)
}

async function getReleaseByName() {
  var options = {
    method: 'GET',
    url: `https://api.github.com/repos/adeo/mozaic-design-system/releases/tags/v${lerna.version}`,
    headers: {
      'User-Agent': 'Docker',
      authorization: `bearer ${process.env.GH_API_TOKEN}`,
      'content-type': 'application/json',
    },
  }

  const release = await request(options)
  return release
}

async function sendAssetForRelease(idRelease, name) {
  var stats = fs.statSync(name)

  var options = {
    method: 'POST',
    url: `https://uploads.github.com/repos/adeo/mozaic-design-system/releases/${idRelease}/assets`,
    qs: { name: name },
    headers: {
      'User-Agent': 'Docker',
      authorization: `bearer ${process.env.GH_API_TOKEN}`,
      'content-type': 'application/zip',
      'Content-Length': stats.size,
    },

    body: fs.createReadStream(name),
  }

  const req = await request(options)
}

async function createAssets() {
  const release = await getReleaseByName()
  const idRelease = JSON.parse(release).id

  assets.assets.forEach(function(asset) {
    newArchive(asset.name, asset.folders)
    sendAssetForRelease(idRelease, asset.name)
  })
}

createAssets()
