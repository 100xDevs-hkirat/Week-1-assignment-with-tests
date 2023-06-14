const fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'fileToBeCleaned.txt')



async function readFile() {
    const data = fs.readFileSync(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
    })
    return data
}

async function fileCleaned(contentToBeCleaned) {
    let str = contentToBeCleaned.trim()
    let newStr = ''
    let start = 0
    let end = 0
    while (end <= str.length) {
        end = start + 1;
        while (str[end] !== ' ' && end <= str.length) {
            end++
        }
        newStr += str.slice(start, end) + " "
        start = end + 1
        while (str[start] === " " && start <= str.length) {
            start++
        }
    }
    return newStr
}

async function wFile(content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('file cleaned succssfully.')
    })
}

async function main() {
    const data = await readFile()
    const cleanedData = await fileCleaned(data)
    wFile(cleanedData)
}

main()
