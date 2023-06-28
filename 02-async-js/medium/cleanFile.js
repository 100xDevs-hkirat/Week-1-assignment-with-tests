const fs = require("fs");

function cleanData(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error:", err);
      return;
    }

    const cleanedData = data.replace(/\s+/g, " ").trim();

    fs.writeFile("output.txt", cleanedData, "utf8", (err) => {
      if (err) {
        console.error("Error:", err);
        return;
      }
      console.log("The file was saved!");
    });
  });
}

cleanData("cleanme.txt");
