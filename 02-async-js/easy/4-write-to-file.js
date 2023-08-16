// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require('fs');

fs.writeFile('Week1-Assignment/Week-1-assignment-with-tests/02-async-js/easy/write.txt',"Data Written into the file Successful",'utf-8',(err,data)=>{
    if(err)
    {
        console.log("Error")
    }
    console.log("Write Successfull")
})