// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs=require('fs')

//read operation

    fs.readFile('Week1-Assignment/Week-1-assignment-with-tests/02-async-js/medium/read.txt','utf-8',(err,data)=>{
        if(err)
        {
            console.log('File Read error')
        }

        //data cleansing 
        data=data.split(' ').filter(word=> word!='').join(' ')
        

        
        //writing cleansed data to file
        fs.writeFile('Week1-Assignment/Week-1-assignment-with-tests/02-async-js/medium/write.txt',data,'utf-8',(err,data)=>
        {
            if(err)
            {
                console.log("Error in Write Operation")
            }
            console.log("Write Success")

        })
    })

