const fs = require("fs")

fs.readFile("./02-async-js/easy/textFile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

console.log("List of Sigma Males is long, but some of them are : ")
