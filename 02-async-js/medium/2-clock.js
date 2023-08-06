
setInterval(()=>{
    const time = new Date();
    let localtime = time.toLocaleTimeString();
    if(time.getHours()<10){
        console.log("0"+localtime);
        
    }else{
        console.log(localtime);
    }

},1000);