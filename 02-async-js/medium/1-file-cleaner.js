// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

const { Console } = require('console');
const fs = require('fs');
let path = 'D:/coding/harkirat/Week-1-assignment-with-tests/02-async-js/medium/b.txt';


//Part-1: function to read & and remove extra space from the file.
fs.readFile(path, 'utf8', function(err,data){
    if (err) {
        console.error(err);
    }else{
        let final = readRemoveExtraSpace(data);
    }
});

function readRemoveExtraSpace(data) {
    let characters = data.split(" ");
    let words = [];
    for (let i = 0; i < characters.length; i++) {
        if (characters[i] === "") {

        } else {
            words.push(characters[i]);
        }
    }
    let final = words.join(" ");
    fs.writeFile(path,final,'utf8',function(err,data){
        if (err) {
            console.error(err);
        }else{
            console.log("Done!");
        }
    });
    return final;
}


// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```