const fs = require('fs');

const data = "It plays a significant role in managing data flow and ensuring that different components of the operating system and applications work together efficiently."

fs.writeFile('./output.txt',data,(err)=>{
     if(err){
         console.log(`Error writing file : ${err.message}`);
     }else{
         console.log('successfully written file');
     }
})