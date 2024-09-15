/**
 * Reading the contents of a file
 * Write code to read contents of a file and print it to the console.
 * You can use the fs library as a black box, the goal is to understand async tasks.
 * Try to do an expensive operation below the file read and see how it affects the output.
 * Make the expensive operation more and more expensive and see how it affects the output.
 */

const fs = require('fs');


function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:');
        console.log(data);
    });
}


const filename = '../files/Easy3.txt'; // Replace with your file name
readFileAndPrint(filename);

let count = 1;
for (let i = 0; i < 100000000; i++) {
    count = count + i;
}
console.log(count);
