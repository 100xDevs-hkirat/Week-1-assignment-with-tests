const fs = require('fs');

const filePath = './file.txt';

let cleanData = (data)=>{
    let splittedData=data.split(" ");
    const cleanedData=splittedData.filter((e)=>{
      e=e.trim();
      if(e.length>0)return e;
    })  

  return cleanedData.join(" ");
}


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(cleanData(data));
});