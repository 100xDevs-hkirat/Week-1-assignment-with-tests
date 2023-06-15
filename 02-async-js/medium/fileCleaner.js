const path = require('path');
const fs = require('fs').promises;
// const fs = require('fs'); for unoptimzed version of code below
const filePath = path.join(__dirname, 'file2.txt');

//optimized way
async function modifyFile() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const modifiedData = data.replace(/\s+/g, ' ').trim();
    console.log('File has been read, and extra spaces have been removed.');

    await fs.writeFile(filePath, modifiedData, 'utf-8');
    console.log('The file has been updated and saved successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
modifyFile();


//unoptimized way
fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
 const modifiedData = data.replace(/\s+/g, ' ').trim();
  console.log('file is read and extra spaces have been removed, now starting to write back');
 fs.writeFile(filePath,modifiedData,'utf-8',(err)=>{
    if (err) throw err;
    console.log('The file has been saved!');
 })
 console.log(data);
});
