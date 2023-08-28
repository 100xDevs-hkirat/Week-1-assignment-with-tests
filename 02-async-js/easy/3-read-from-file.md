## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

let fs = require('fs');

fs.readFile('D:\\Programming\\Harkirat\\text.txt', 'utf8', (err, data)=>{
  if(err)
    console.log(err);
  else{
    console.log(data);
    
    fs.writeFile('D:\\Programming\\Harkirat\\text.txt', " oooh oooh ooh", (err)=>{
      if(err)
      console.log(err);
      else  
      console.log("Successfull writing");
    })
    
    fs.readFile('D:\\Programming\\Harkirat\\text.txt', 'utf8', (err, data)=>{
      if(err)console.log(err);
      else 
      console.log(data);
    })}
  })