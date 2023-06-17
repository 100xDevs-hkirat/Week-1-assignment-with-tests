// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs')
var content="this is some temp content used to append the txt file"


fs.writeFile('newtemp.txt',content,'utf8',(err)=>{
    if(err){
        console.log(err)
        return;}
    console.log("appended to the text successfully");
});
