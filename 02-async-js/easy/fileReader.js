const fs = require('fs');


fs.readFile('./file.txt' , 'utf-8' , (err , data) =>{
     if(err){
         console.log(`Error Reading file : ${err.message}`);
         return ;
     }
     console.log(`File Content : ${data.toString()}`);
})

