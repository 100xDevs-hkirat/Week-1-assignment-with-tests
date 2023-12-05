function printTime(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    console.log(hour+":"+min+":"+sec);
}

setInterval(printTime,1000);