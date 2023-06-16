const fs = require('fs')
const { totalmem } = require('os')

fs.readFile("just.txt", 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

total = 0
for (let i = 0; i < 100000000; i++) {
    total += i
}
console.log(total)