// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman



const fs = require('fs');

function callback_read(err, data) {
    if (err) {
      console.error(err);
    } else {
      const content = data.toString();
      const formate_content = content.replace(/\s+/g, " ");
    //   console.log(typeof formate_content)
      processFormattedData(formate_content);
    }
  }

function processFormattedData(data) {
    function callback_write(err) {
        if (err) {
          console.error(err);
        } else {
          console.log("content has been successfully written");
        }
      }
      fs.writeFile('Week-1-assignment-with-tests/02-async-js/medium/file.txt', data, callback_write)
    }

fs.readFile('Week-1-assignment-with-tests/02-async-js/medium/file.txt','utf-8', callback_read)



