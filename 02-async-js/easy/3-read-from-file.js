const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'text.txt')

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

let sum = 0
for (let i = 0; i <= 10000000; i++) {
    sum += i
}
console.log(sum)