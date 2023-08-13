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
const fs = require('fs');

let str = "";

fs.readFile("./a.txt", 'utf8', (err, data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
        str = data.replace(/\s+/g, ' ').trim();
        console.log(str);

        fs.writeFileSync('./a.txt', str);
    }
});