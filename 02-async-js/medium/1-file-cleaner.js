const fs = require("fs");

function clean(data) {
  var dataArr = data.split(" ");

  var ans = [];
  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i].length == 0) {
    } else {
      ans.push(dataArr[i]);
    }
  }
  ans = ans.join(" ");
  return ans;
}

fs.readFile("clean.txt", "utf-8", (err, data) => {
  if (err) throw err;
  var cleanedData = clean(data);

  fs.writeFile("clean.txt", cleanedData, "utf-8", (err, data) => {
    if (err) throw err;
    else console.log("file cleaned");
  });
});
