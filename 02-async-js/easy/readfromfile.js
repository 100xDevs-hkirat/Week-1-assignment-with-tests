const fs = require('fs')

fs.readFile('./read.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    
    console.log('File contents:');
    console.log(data);
  });
//expensive operation operation 
//   for(let i = 0 ;i <10000000000000000000000000000000000000000000000000;i++){
//       for(let j= 0 ;j <10000000000000000000000000000000000000000000000000;i++){
//     console.log(i)
//   }
//     console.log(i)
//   }