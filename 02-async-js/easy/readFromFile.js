var fs = require("fs");

var readit = (filename) => {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      //The error() method writes an error message to the console.
      console.error("Error:", err);
      return;
    }
    console.log(data);
  });
};

readit(".\\02-async-js\\easy\\readme.txt");
console.log(thripleIt(10000333330));

function thripleIt(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += n ** 3;
  }
  return sum;
}

//fs is called it in end no matter how much time the normal operation takes.
