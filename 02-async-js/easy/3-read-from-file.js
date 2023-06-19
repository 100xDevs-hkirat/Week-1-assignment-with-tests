const fs = require('fs')

function read(fileName){
    fs.readFile("./easy/"+fileName,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data.toString())
    })
}

read("3-read-from-file.md")

let clock = 0

for(let i = 0; i<1000000000;i++){
    clock ++
}
console.log(clock)
for(let i = 0; i<1000000000;i++){
    clock ++
}
console.log(clock)
for(let i = 0; i<1000000000;i++){
    clock ++
}
console.log(clock)
