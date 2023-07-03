//01. counter using setInterval

// let sum = 0;
// const counterFn = () => {
//   console.clear();
//   sum = sum + 1;
//   console.log(sum);
// };

// setInterval(counterFn, 1000);

// 02. counte without using setInterval

// const counterFn = (count) => {
//   console.clear();
//   console.log(count);

//   if (count < 10) {
//     count++;
//     setTimeout(counterFn, 1000, count);
//   }
// };

// counterFn(1);

// 03. Read from the file

// const fs = require("fs");

// fs.readFile("./3-read-from-file.md", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// 04. Write to the file

// const fs = require("fs");

// const data = "Hey My name is Asus. ";
// const job = "I want to be a Laptop Company.";

// fs.writeFile("./demo.md", data, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.appendFile("./demo.md", job, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
