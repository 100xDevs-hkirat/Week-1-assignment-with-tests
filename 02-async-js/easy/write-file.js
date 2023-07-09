var fs = require('fs')
function Writefile(path,content){
var content = fs.promises.writeFile(path,content);
return content;
}
Writefile("Writefile.txt","Wassup Buddy !").then(()=>{
    console.log("Succesful!")
});