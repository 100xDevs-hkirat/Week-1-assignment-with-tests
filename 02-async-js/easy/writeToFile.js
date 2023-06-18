const fs = require("fs");

const contentToWrite = "This is the content to write to the file.";

// Write to file
fs.writeFile("dummy.txt", contentToWrite, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }

  console.log("Content has been written to the file successfully.");
});
