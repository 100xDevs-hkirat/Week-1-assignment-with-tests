const fs = require('fs')

fs.writeFile('file.txt','Hello file','utf-8',(error)=>{
    if(error){
        console.error('Error writing to the file:', error);
        return;
    }
    console.log("File updated")

});
additionalTask();
function additionalTask(){
    console.log("additionalTask");
}