const fs = require('fs')
const { wrap } = require('module')

const updateFile = function (filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        let words = data.split(" ")
        words = words.filter(item => item !== '')
        let sentence = words.join(" ")
        fs.writeFile(filename, sentence, 'utf8', (err) => {
            if (err) {
                console.log('error while writing back file')
            } else {
                console.log('file update successfully')
            }
        })
    })
}

updateFile('spaced-content.txt')