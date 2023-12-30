const fs = require("fs")
let data = "this is the text file to write"
fs.writeFile("text.txt", data,(err) => {
   if(err){
    console.log(err)
   } else {
    console.log("text written to file")
   }
})
for(let i=0;i<1000;i++){
   console.log(i)
}