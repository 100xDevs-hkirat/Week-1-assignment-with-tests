const fs = require("fs")

let data = "Dr S Jaishankar"

// Clears previously written things in file, and write the current 'data'
fs.writeFile("./02-async-js/easy/textFile.txt", data, (err) => {
  if (err) {
    console.err(err)
    return
  }
})

// Appends new data in the file
fs.appendFile("./02-async-js/easy/textFile.txt", data, (err) => {
  if (err) {
    console.err(err)
    return
  }
})
