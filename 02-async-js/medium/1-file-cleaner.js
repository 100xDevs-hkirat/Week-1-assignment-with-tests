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

function updateData () {
    return fs.readFile("a.txt", {encoding : "utf-8"}, (err, data) => {
        if(err) {
            console.log(err);
        }
        fs.writeFile("a.txt", data.replace(/\s+/g, ' '),'utf-8', (err) => {
            if(err) console.log("error");
        })
    })
}

updateData();