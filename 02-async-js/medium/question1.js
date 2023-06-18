const fs = require('fs');

function readFile(path){
    return new Promise((resolve, reject)=>{
        fs.readFile(path,'utf8', (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
function writeFile(path, data, done){
    fs.writeFile(path, data, (err)=>{
        if(err){
            throw(err)
        }
        done()
    })
}
const path = '02-async-js/medium/question1.txt'

async function fetchData(){
    try{
        const data = await readFile(path)
        writeFile(path, data.replace(/ +/g, ' '), ()=>{
            console.log('file updated')
        })
    }catch(err){
        throw err;
    }
    
}
fetchData()
