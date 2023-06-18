const fs = require("fs");

function cleanData(data) {
  let arr = data.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  let resultString = result.join(" ");
  console.log(resultString);
  return resultString;
}

function fileRead(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  let cleanedData = cleanData(data);

  fs.writeFile("dummy.txt", cleanedData, "utf8", (err) => {
    console.log(err);
  });
}

fs.readFile("dummy.txt", "utf8", fileRead);
