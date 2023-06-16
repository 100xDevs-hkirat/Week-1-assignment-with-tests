const fs = require("fs")

fs.readFile("./02-async-js/medium/textFile.txt", "utf8", (err, data) => {
  if (err) {
    console.err(err)
    return
  }

  let ans = removeSpaces(data)
  // console.log(ans)

  fs.writeFile("./02-async-js/medium/textFile.txt", ans, (err) => {
    if (err) {
      console.err(err)
      return
    }
  })
})

function removeSpaces(data) {
  let ans = ""
  let n = data.length
  let temp = ""
  let counter = 0

  for (let i = 0; i < n; i++) {
    if ((data[i] >= "a" && data[i] <= "z") || (data[i] >= "A" && data[i] <= "Z")) {
      temp += data[i]
      counter = 1
      continue
    }
    if (counter === 1) {
      counter = 0
      ans += temp
      ans += " "
      temp = ""
    }
  }

  ans += temp

  return ans
}
