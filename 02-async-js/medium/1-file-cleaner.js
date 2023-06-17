// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
//
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```
//
// After the program runs, the output should be
//
// ```
// hello world my name is raman
// ```
const fs=require('fs');

fs.readFile('raw_data.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
   var temp_data=data;
    let space=" "
  temp_data=temp_data.split(" ").filter(char=>(char!==""))
    temp_data=temp_data.join(" ")
    console.log(temp_data)

});