module.exports = ({ data, file }, outputPath) =>
  new Promise((resolve, reject) => {
    const fileName = path.basename(file)
    const savingFile = path.join(outputPath, fileName)

    fs.writeFile(savingFile, data, 'utf8', (err) => {
      if (err) {
        reject(err)
      }

      resolve({ fileName, outputPath, data })
    })
  })
