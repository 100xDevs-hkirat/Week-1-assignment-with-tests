## File cleaner hello world my name is raman

\*/
this is the cleaner code:::
const fs = require("fs");

const filePath = "1-file-cleaner.md";

fs.readFile(filePath, "utf8", (err, data) => {
if (err) {
~ console.log("Error reading file:", err);
return;
}

const cleanedContent = cleanFile(data);

fs.writeFile(filePath, cleanedContent, "utf8", (err) => {
if (err) {
console.log("Error writing file:", err);
return;
}

    console.log("File has been cleaned and updated successfully!");

});
});

function cleanFile(content) {
const cleanedContent = content.replace(/\s+/g, " ").trim();
return cleanedContent;
}

/
