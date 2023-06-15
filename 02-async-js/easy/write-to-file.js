// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->


var fs = require('fs');

fs.writeFile('hello.txt',' Writing async to hello.txt', (err)=>{
    if(err){
        console.log('error enc');
    }
    fs.readFile('hello.txt',(err,data)=>{
        if(err){
            console.log('error');
        }
        console.log(data.toString());
    })
});

