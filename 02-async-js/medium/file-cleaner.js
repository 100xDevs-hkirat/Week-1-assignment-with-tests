var fs = require('fs')

async function formatFile(path){
    let content= await fs.promises.readFile(path,{encoding:'utf-8'}).then((data)=>data)
    content=content.replace(/(\w+)(  +)/g,"$1 ")
    await fs.promises.writeFile(path,content)
}
formatFile("./a.txt");