function Clock(){
    console.clear()
    var str = ""
    var time1 = new Date().toUTCString()
    str = time1
    var ampm = "AM";
    if(Date().getHours>12 ){
        ampm = "PM";
    }
    console.log(str.slice(17,26)+ampm)
}
setInterval(Clock, 1000);