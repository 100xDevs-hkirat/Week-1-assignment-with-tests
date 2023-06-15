const fs = require("fs");

fs.readFile("textFile.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const trimmedData = data
    .split(" ")
    .filter((val) => val !== "")
    .join(" ");

  fs.writeFile("textFile.txt", trimmedData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File write successful.");
  });
});
