// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let fs = require('fs');

fs.readFile('dirtyfile.txt',(err,data)=>{

    let s = data.toString().replace(/ +/g," ");
    
    fs.writeFile('dirtyfile.txt',s,(err)=>{
        if(err){
            console.log('error');
        }
        
    });
});
