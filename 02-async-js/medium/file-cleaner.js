const fs = require('fs');

try {
    const inputFilePath = './noisydata.txt';
    const outputFilePath = './cleaneddata.txt';
  
    let data = fs.readFileSync(inputFilePath, 'utf8');
    data = data.replace(/\s+/g, ' ').trim();
  
    fs.writeFileSync(outputFilePath, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File Cleaned Successfully!');
    });
  } catch (err) {
    console.error(err);
  }