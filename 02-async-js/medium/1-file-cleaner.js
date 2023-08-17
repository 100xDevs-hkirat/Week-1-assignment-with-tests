const fs = require('fs')

const path = __dirname + '/fileWithSpaces.txt'

fs.readFile(path, 'utf8', (_, data) => {
  const cleanData = data.replace(/\s+/g, ' ')
  console.log(cleanData)
})
