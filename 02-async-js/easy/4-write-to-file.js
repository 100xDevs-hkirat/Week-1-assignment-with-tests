const fs =  require("fs");
const data = "this is updated version of file."
fs.writeFile("./assignments/Week-1-assignment-with-tests/02-async-js/easy/a.txt",data,"utf-8",(err)=>{
    if (err) throw err;
    console.log("the file has been updated");
});