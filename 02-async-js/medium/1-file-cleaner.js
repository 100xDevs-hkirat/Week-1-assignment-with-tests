// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const fs = require('fs')

var contentToWrite=""
function readContentsOfFile(err,contents){
    console.log(contents);
    var newArr = []
    // matches regular expression to get only alphanumeric values
    const regex = /[a-z0-9]/;

    //split the contents using spaces
    var str = contents.split(' ');
    // in returned array, omit the values which contain spaces
    str.map(elem => {
        if(regex.test(elem)){
            newArr.push(elem)
        }
    })
    console.log(newArr.join(' '));
}

fs.readFile('./medium/test.txt','utf-8',readContentsOfFile)