/**
 * File cleaner
 * Read a file, remove all the extra spaces and write it back to the same file.
 *
 * For example, if the file input was
 *
 * hello     world    my    name   is       raman
 * After the program runs, the output should be
 *
 * hello world my name is raman
 */

const fs = require('fs');


function writeFileAndPrint(filename) {
    try{
        fs.readFileSync(filename, 'utf8');
        let data = fs.readFileSync(filename, 'utf8');
        console.log('File contents before removing extra spaces:');
        console.log(data);
        data = data.replace(/\s+/g, ' ');

        fs.writeFileSync(filename, data);

        let data2 = fs.readFileSync(filename, 'utf8');
        console.log('File contents after removing extra spaces:');
        console.log(data2);


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