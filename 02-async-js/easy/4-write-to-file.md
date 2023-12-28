## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let data = "changed it";

function afterContentUpdate(err) {
if (err) {
console.error(err);
return;
}
console.log("Job Done");
}

fs.writeFile("writehere.txt", data, "utf8", afterContentUpdate);
