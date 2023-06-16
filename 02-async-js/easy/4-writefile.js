const fs = require('fs')
let str = "hii"
fs.writeFile('02-async-js/easy/dummy.txt',str,(err)=>{
    if(err) throw err
    console.log("written")
})