const {readFile, writeFile} = require("fs")

function cleanFile(file){
    readFile("./medium/"+file,(err,cnt)=>{
        if(err)
            throw err
        let cleanedCnt = ""
        cnt = cnt.toString()
        let prevChar = cnt[0]
        for(let i =0;i<cnt.length;i++){
            if(cnt[i] !=" "){
                cleanedCnt += cnt[i]
            }else{
                if(prevChar != " "){
                    cleanedCnt += cnt[i]
                }else{
                    continue
                }
            }
            prevChar = cnt[i]
        }
        // console.log(cleanedCnt)
        writeFile("./medium/"+file,cleanedCnt,"utf8",(err)=>{
            if(err)
                throw err
            console.log('successfully writed to file')
        })
    })
}

cleanFile("dirty.txt")