const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'text.txt')

const content = "hello i am a software engineer."

fs.writeFile(filePath, content, (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log("file wrote successfully.")
})
