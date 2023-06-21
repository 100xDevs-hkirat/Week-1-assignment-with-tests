var fs = require('fs');

function cleanUp(data){
    let r = [];
    for(let i = 0; i < data.length ; i++){
        if (data[i] != ' '){
            let k = "";
            while(i < data.length && data[i] != ' '){
                k = k + data[i];
                i = i + 1;
            }
            r.push(k)
        }
    }
    let str = "";
    for(let word of r){
        str = str + word + " ";
    }
    str = str.trim();
    return str;
}



fs.readFile("/tmp/test", 'utf-8',(err,data) =>
{
    if(data){
        let Data = data.trim();
        console.log(Data);
        Data = cleanUp(Data)
        console.log(Data);
        fs.writeFile('/tmp/test', Data, 'utf8', (error) => {
            if (error) {
              console.error('Error writing to file:', error);
              return;
            }
            console.log('Data written to file successfully.');
          });
    }
    else if(err){
        throw err;
    }
} );