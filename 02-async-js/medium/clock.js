function clock(format){
    setInterval(()=>{
        let date = new Date();
        let res;
        if(format==="HH:MM:SS"){
            res = date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds();
        }
        if(format==="HH:MM:SS AM/PM"){
            res = date.toLocaleTimeString();
        }

        console.log(res);
    },1000)
}

// clock("HH:MM:SS");
clock("HH:MM:SS AM/PM");