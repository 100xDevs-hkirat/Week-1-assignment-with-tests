const fs = require('fs');
const path = require('path');

function clean(data) {
  data = data.replace(/\s+/g, ' ').trim();  // replace(/\s+/g, ' ') is a regular expression that matches one or more spaces and replaces them with a single space. The trim() method removes whitespace from both ends of a string.
  var array = data.split(" ");
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== "") {
      answer.push(array[i]);
    }
  }
  var result = answer.join(" ");
  return result;
}

function fileRead(err, data) {
  if (err) {
    console.error(err);
    return;
  }

  let cleanedData = clean(data);
  console.log(cleanedData);
  const filePath = path.join(__dirname, 'cleaned.txt'); 
      // to ensure that the data is fully processed before it's written to the file fs.writeFileSync function, which is the synchronous version of fs.writeFile is used.
  fs.writeFileSync(filePath, cleanedData, "utf8", function (err) {
    if (err) throw err;
    console.log("Wrote to the file successfully.");
  }); 
}

const filePath = path.join(__dirname, 'clean.txt');
fs.readFile(filePath, 'utf8', fileRead);