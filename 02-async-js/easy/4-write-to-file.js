const fs = require("fs")

function writeToFile(fileName, str){
    fs.writeFile("./easy/"+fileName,str,"utf8",(err)=>{
        if(err){
            throw err
        }
        console.log("successfull")
    })
}

writeToFile("sample.txt","Hii i'm joyal")