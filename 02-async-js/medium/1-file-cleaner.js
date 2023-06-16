const fs = require("fs");

const filePath =
  "/Users/agnivadutta/Desktop/MERN/Harkirat/Week-1-assignment-with-tests/02-async-js/medium/file1.txt";

// Read the file
fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }

  // Remove extra spaces from the content
  const cleanedContent = data.replace(/\s+/g, " ");

  // Write the cleaned content back to the file
  fs.writeFile(filePath, cleanedContent, "utf8", (error) => {
    if (error) {
      console.error("Error writing to file:", error);
      return;
    }

    console.log("File has been updated with cleaned content.");
  });
});
