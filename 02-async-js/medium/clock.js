
function count(){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    let part;
    if(hour >= 12){
        part = "PM"
    }
    else{
        part = "AM"
    }
    console.log(hour,':',minute,":",second,part)
}

setInterval(count, 1000)