/**
 * Write to a file
 * Using the fs library again, try to write to the contents of a file.
 * You can use the fs library to as a black box, the goal is to understand async tasks.
 */

const fs = require('fs');


function writeFileAndPrint(filename) {
    let content = "new content added";
    try{
        fs.appendFileSync(filename, content);
        const data = fs.readFileSync(filename, 'utf8');
        console.log('File contents:');
        console.log(data);
    } catch (err) {
        console.error('Error:', err);
    }

}

const filename = '../files/Easy3.txt';
writeFileAndPrint(filename);

let count = 1;
for (let i = 0; i < 100000000; i++) {
    count = count + i;
}
console.log(count);