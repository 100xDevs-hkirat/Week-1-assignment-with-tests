const fs =require("fs");

let cleanedData ="";
fs.readFile("./assignments/Week-1-assignment-with-tests/02-async-js/medium/new.txt","utf-8",(err,data)=>{
    if (err) throw err;
    cleanData(data);
   
});
function cleanData(data)
{
    let array_data =data.split("");
    new_data ="";
    let counter =0;
    for(var i=0;i<array_data.length;i++){
        if((array_data[i] === " ")&& (i !== 0) && (i !== (array_data.length-1)))
        {
            counter++;
            if(counter===1)
            {
                new_data = new_data + array_data[i]
            }

        }
        else if( array_data[i] !== " ")
        {
            new_data =new_data + array_data[i];
            counter =0;
        }
    }
    fs.writeFile("./assignments/Week-1-assignment-with-tests/02-async-js/medium/new.txt",new_data,"utf-8",(err)=>{
        console.log("File has been cleaned and updated");
    });
}

