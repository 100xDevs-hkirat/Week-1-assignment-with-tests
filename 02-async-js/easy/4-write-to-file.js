// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = required('fs');

let data = "remote job himanshu .";

function afterContentsUpdate(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File has written');
}

fs.writeFile('aaa.txt', data, 'utf8', afterContentsUpdate);