fs=require("fs");

filePath="dirty_file.txt";


fs.readFile(filePath,"utf8",(err,data)=>{
    if(err){
        console.log("Error while trying top read",err);
        return;
    }

    let cleaned_data="";
    for(let i=0;i<data.length;i++){
        if(data[i]==' ' || data[i]=='   '){
        while(i<data.length && (data[i]==' ' || data[i]=='   '))
           i++;
           
        cleaned_data+=" "
        }
        cleaned_data+=data[i];
    }


    fs.writeFile(filePath,cleaned_data,'utf8',(err)=>{
        if(err){
            console.log("error while writing to the file",err);
            return;
        }

        console.log("cleaned and written to file");
    })
    
})