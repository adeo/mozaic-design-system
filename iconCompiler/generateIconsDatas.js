const dirtree = require('directory-tree')
const fs = require('fs')

const iconDir = dirtree('static/icons')

const iconList = iconDir.children.map(icon => {
  const cat = icon.name.split('_')[0]
  const size = icon.name
    .replace(icon.extension, '')
    .split('_')
    .pop()

  const name = icon.name
    .replace(icon.extension, '')
    .replace(cat, '')
    .replace(size, '')
    .slice(1, -1)

  const fullpath = icon.path
    .replace('static\\', '/')
    .replace('static/', '/')
    .replace('\\\\', '/')
    .replace('\\', '/')
  console.log(fullpath)

  return {
    cat,
    size,
    name,
    fullpath,
  }
})

if (!fs.existsSync(`${process.cwd()}/src/data/`)) {
  fs.mkdirSync(`${process.cwd()}/src/data/`)
}
fs.writeFileSync(
  `${process.cwd()}/src/data/icons.json`,
  JSON.stringify(iconList, 0, 2),
  'utf8'
)
