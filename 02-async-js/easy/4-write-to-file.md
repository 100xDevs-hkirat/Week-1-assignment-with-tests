## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.



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