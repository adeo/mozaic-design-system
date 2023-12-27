const error = (name, error) => `in ${name} : ${error}`

const validator = (svgName, sizeDirectory) => {
  let errors = []

  if (!/^[a-zA-Z0-9]+_[A-Za-z0-9-]+_/.test(svgName)) {
    errors.push(
      error(
        svgName,
        'icon file name should start with a category name separated by _ and the first letter following the category name should be a capital letter'
      )
    )
  }

  if (svgName.includes(' ')) {
    errors.push(error(svgName, 'icon file name should not contain spaces'))
  }

  if (!svgName.includes(`${sizeDirectory}.svg`)) {
    errors.push(
      error(
        svgName,
        ` found in /${sizeDirectory}/ directory. Icon file name is either wrong or the icon is in the wrong directory`
      )
    )
  }

  if (errors.length) return errors.join('\n✗ ERROR : ')

  return null
}

module.exports = validator
