const fs = require("fs");

const content = "This is the content that will be written to the file.";

// Write content to the file
fs.writeFile(
  "/Users/agnivadutta/Desktop/MERN/Harkirat/Week-1-assignment-with-tests/02-async-js/easy/file.txt",
  content,
  "utf8",
  (error) => {
    if (error) {
      console.error("Error writing to file:", error);
      return;
    }

    console.log("Content has been written to the file.");
  }
);
