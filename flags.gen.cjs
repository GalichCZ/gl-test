const fs = require('fs')
const path = require('path')

const flagsDir = path.join(__dirname, 'public', 'flags')

const outputFile = path.join(__dirname, 'src', 'assets', 'flags.json')

fs.readdir(flagsDir, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err)
    return
  }

  const flagMap = {}

  files.forEach((file) => {
    if (path.extname(file) === '.png') {
      const countryCode = path.basename(file, '.png')
      const relativePath = `/flags/${file}`
      flagMap[countryCode] = relativePath
    }
  })

  // Write the flag map to the JSON file
  fs.writeFile(outputFile, JSON.stringify(flagMap, null, 2), (err) => {
    if (err) {
      console.error('Error writing the JSON file:', err)
    } else {
      console.log('Flag map successfully generated!')
    }
  })
})
