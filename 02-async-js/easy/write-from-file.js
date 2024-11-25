const fs=require("fs");
fs.writeFile('b.txt',"Hello How are You mate",writeFileOp);

function writeFileOp(err){
   if(err){
    console.log(err);
   }else{
    console.log("Operation Completed");
   }
}