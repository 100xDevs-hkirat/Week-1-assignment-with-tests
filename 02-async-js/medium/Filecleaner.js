const fs = require('fs')
fs.readFile('./spacefile.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    let newdata = data.replace(/\s+/g, ' ').trim()
    fs.writeFile("./spacefile.txt",newdata,(err)=>{
      if(err) throw err
    })
    
   
  });