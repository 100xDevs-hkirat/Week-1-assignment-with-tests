const fs = require("fs");

const content = "Hello, world!"; // The content you want to write to the file

// Asynchronous write
fs.writeFile("./02-async-js//file.txt", content, "utf8", function (error) {
  if (error) {
    console.error("Error writing file:", error);
  } else {
    console.log("File written successfully.");
  }
});

sum = 0;

for (let i = 0; i < 10000000000; i++) {
  sum += 1;
}

console.log(sum);

// Synchronous write
// try {
//   fs.writeFileSync("./02-async-js/easy/write.txt", content, "utf8");
//   console.log("File written successfully.");
// } catch (error) {
//   console.error("Error writing file:", error);
// }
