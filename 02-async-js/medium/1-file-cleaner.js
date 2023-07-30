// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was: hello     world    my    name   is       raman

// output: hello world my name is raman

var fs = require("fs");

function read_from_file() {
    fs.readFile('sample.txt', 'utf8', function(err, data) {
      if (err) {
        console.error(err);
        return;
      }
      
      var trimmedStr = data.replace(/\s+/g, ' ').trim();

      fs.writeFile('sample.txt', trimmedStr,'utf8', function(err, data) {
              if (err) {
                console.error(err);
                return;
              }
              
            });
      
    });
  }



read_from_file();


// write_to_file(data);
