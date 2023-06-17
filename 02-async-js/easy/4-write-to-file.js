// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


    const fs = require('fs')
    let data = 'write to the file man!';

    function contentsUpdated(err){ 
      if(err){
        console.log(err);
        return;
      }
      console.log('File written');
    }

    fs.writeFile('./data.txt', data, contentsUpdated)