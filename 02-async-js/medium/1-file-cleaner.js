const {readFile} = require("fs")

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
        console.log(cleanedCnt)
    })
}

cleanFile("dirty.txt")