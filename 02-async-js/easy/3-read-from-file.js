const fs = require('fs')

const path = __dirname + '/file.txt'

fs.readFile(path, 'utf8', (err, data) => {
  if (err) throw new Error('Error while reading from file', err)

  console.log(data)
})

const getSumUptoN = n => {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

console.log(getSumUptoN(100000))
console.log(getSumUptoN(10000000000))
