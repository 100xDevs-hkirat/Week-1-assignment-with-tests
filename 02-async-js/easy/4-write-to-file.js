// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
var fs = require('fs');
function fileRead(err,content){
    if(err){
        console.error("there is error in reading file");
        return;
    }
    console.log(content);
    return;
}
 
fs.writeFile("demo.txt", " hello Govind",function (err){
    if(err){
        console.error("error in writing file");
        return;
    }
    console.log("file written sucessfully"); 
    console.log("let's read file now!");

    fs.readFile('demo.txt', 'utf8',fileRead);
});
