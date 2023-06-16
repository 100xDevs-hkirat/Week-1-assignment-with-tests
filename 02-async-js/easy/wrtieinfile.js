const fs = require('fs')
fs.writeFileSync("read.txt","hi this is a demo writng",(err)=>{
    if(err) throw err
})