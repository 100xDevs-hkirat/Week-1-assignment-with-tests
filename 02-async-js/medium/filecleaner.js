const fs = require('fs');


function fileCleaner(s){
         let res = "" ;
         let i = 0 ;
         while(i < s.length){
            while(i < s.length && s[i] == ' '){
                i++;
            }

            while(i < s.length && s[i] != ' ') res += s[i++];

            let flag = false ;

            while(i < s.length && s[i] == ' '){
                i++;
                flag = true ;
            }

            if(flag === true) res += " " ;
         }

         return res ;
}

fs.readFile('./file.txt','utf-8',(err,data)=>{
     if(err){
            console.log(`Error Reading file : ${err.message}`);
            return ;
     }
     let res = fileCleaner(data.toString());
     console.log(res);
})