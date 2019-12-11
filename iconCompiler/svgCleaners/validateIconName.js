const error = (name, error) => `in ${name} : ${error}`

const validator = (svgName, sizeDirectory) => {
  let errors = []

  if (!/^[a-zA-Z0-9]+_[A-Z][A-Za-z0-9-]+_/.test(svgName)) {
    errors.push(
      error(
        svgName,
        'icon Filename should start with a category name separated by _ and the first letter following the category name should be a capital letter'
      )
    )
  }

  if (svgName.includes(' ')) {
    errors.push(error(svgName, 'icon Filename should not contain spaces'))
  }

  if (!/_(16|24|32|48|64|96)px.svg$/.test(svgName)) {
    errors.push(
      error(svgName, 'icon Filename should always end with _[size]px.svg')
    )
  }

  if (!svgName.includes(`${sizeDirectory}.svg`)) {
    errors.push(
      error(
        svgName,
        ` found in /${sizeDirectory}/ directory. Icon File name is either wrong or the icon is in the wrong directory`
      )
    )
  }

  if (errors.length) return errors.join('\n✗ ERROR : ')

  return null
}

module.exports = validator
