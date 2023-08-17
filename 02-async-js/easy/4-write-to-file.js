const fs = require('fs')

const path = __dirname + '/testWrite.txt'
fs.writeFile(path, 'Writing to a text file using fs module', err => {
  if (err) console.error('Error while writing to a file', err)
  console.log('File written successfully')
})
