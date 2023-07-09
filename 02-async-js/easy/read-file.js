var fs = require('fs')
function Readfile(path){
var content = fs.promises.readFile(path,{ encoding: 'utf8' });
return content;
}
Readfile("./textfile.txt").then((content)=>{
    console.log(content)
})