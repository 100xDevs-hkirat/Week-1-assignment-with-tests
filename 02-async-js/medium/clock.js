let currentTime=new Date();

let hour=currentTime.getHours();
let minute=currentTime.getMinutes();
let second=currentTime.getSeconds();

setInterval(()=>{
    console.clear();
    currentTime=new Date();
    hour=currentTime.getHours();
    minute=currentTime.getMinutes();
    second=currentTime.getSeconds();
    console.log(`${hour}:${minute}:${second}`);
},1000);