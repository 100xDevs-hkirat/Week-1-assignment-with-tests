const fs = require("fs");

const filePath = "./testfile.md";
const filePath1 = "./testfile1.md";
let content = "";
let content1 = "";

fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.log("Error while reading the file ", error);
    return;
  }
  console.log("Read data  =>", data);
  content = data.replace(/\s+/g, " ").trim();
  content1 = data;
  console.log("content ", content1);

  fs.writeFile(filePath1, content, "utf8", (err) => {
    if (err) {
      console.log("Error while reading the file ", err);
      return;
    }
    console.log("written to file");
  });
});
