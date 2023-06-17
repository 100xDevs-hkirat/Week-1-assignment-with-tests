
function currTime(){
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

//    console.log(`${hour}:${min}::${sec}`); //24 hour format
    if(hour < 12){
        console.log(`${hour}:${min}::${sec} AM`)
    }
    else{
        console.log(`${hour-12}:${min}::${sec} PM`)
    }
}

setInterval(currTime, 1*1000);
