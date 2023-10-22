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
const fs = require('fs')
var str='';
var fin='';
fs.readFile('file.txt', (err, inputD) => {
    if (err) throw err;
    str=inputD.toString();
    console.log("Data read successfully as " + str);
})

function check(str) {
    let set=false;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===" " && !set)
        {
            set=true;
        }
        else if(str[i]===" " && set)
        {
            continue;
        }
        else
        {
            set=false;
        }
        fin+=str[i];
    }
}

function writer() {
fs.writeFile('file.txt', fin, function(err) {
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('file.txt', function (err, data) {
        console.log("Asynchronous read: " + data.toString());
     });
 });
}

setTimeout(function() {
    check(str);
} , 2000);
setTimeout(writer , 4000);