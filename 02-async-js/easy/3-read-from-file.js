/**
 * Write code to read contents of a file and print it to the console. 
 * You can use the fs library to as a black box, the goal is to understand async tasks. 
 * Try to do an expensive operation below the file read and see how it affects the output. 
 * Make the expensive operation more and more expensive and see how it affects the output. 
 */
const fs = require('fs');

function sumN(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return n;
}

function readCallback(err, contents) {
    console.log("File read , contents were : " + contents);
}

fs.readFile("3-file.txt", "utf8", readCallback);

/**
 * Till 1..9 zeros - works decently fast
 * from 1..10 zeros - becomes slow
 */
console.log(sumN(10000000000));