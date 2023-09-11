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

const fs = require("fs");

fs.readFile("testspace.txt",{encoding : "utf-8"}, (err,data) => {
    if(err) throw err;
    console.log(data);
    
    let newData = data.replace(/\s\s+/g, ' ');
    
    fs.writeFile("testspace.txt",newData,'utf-8',(err) => {
        if(err) throw err;
        console.log("modified successfully");
        console.log(newData);
    })
})

