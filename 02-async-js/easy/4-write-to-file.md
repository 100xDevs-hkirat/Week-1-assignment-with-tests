## Write to a file

<!-- adding some content to a file using the fs external library -->

const fs = require('fs');

const content = 'Hello, There!';

function ifError(err) {
if (err) {
console.error(err);
return;
} else {
console.log("Content is added!")
}

}

fs.writeFile('./read.txt', content, 'utf8', ifError);
