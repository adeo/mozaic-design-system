const error = (name, error) => `in ${name} : ${error}`

const validator = (pdfName, sizeDirectory) => {
  let errors = []

  if (!/^[a-zA-Z0-9]+_[a-zA-Z0-9-]+_/.test(pdfName)) {
    errors.push(
      error(
        pdfName,
        'icon file name should start with a category name separated by _ with the icon name'
      )
    )
  }

  if (pdfName.includes(' ')) {
    errors.push(error(pdfName, 'icon file name should not contain spaces'))
  }

  if (!/_(16|24|32|48|64|96)px.pdf$/.test(pdfName)) {
    errors.push(
      error(pdfName, 'icon file name should always end with _[size]px.pdf')
    )
  }

  if (!pdfName.includes('_')) {
    errors.push(
      error(
        pdfName,
        'icon file name should always start with a category name separated by an underscore "_"'
      )
    )
  }

  if (!pdfName.includes(`${sizeDirectory}.pdf`)) {
    errors.push(
      error(
        pdfName,
        ` found in /${sizeDirectory}/ directory. Icon file name is either wrong or the icon is in the wrong directory`
      )
    )
  }

  if (errors.length) return errors.join('\n✗ ERROR : ')

  return null
}

module.exports = validator
