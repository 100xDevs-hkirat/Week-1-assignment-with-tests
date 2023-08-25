const fs = require("fs");
let cleandata = "";
fs.readFile("./02-async-js/medium/fileMedium.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  cleandata = data
    .split(" ")
    .filter((d) => {
      return d != "";
    })
    .join(" ");
  console.log(cleandata);

  fs.writeFile(
    "./02-async-js/medium/fileMedium.txt",
    cleandata,
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("File Written");
    }
  );
});
