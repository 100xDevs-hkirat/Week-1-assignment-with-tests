var time= new Date()
var hour = time.getHours()
var min = time.getMinutes()
var seconds= time.getSeconds()
function watch() {
    seconds++;
    if(seconds==60){
        min++;
        seconds=0
    }
    if(min==60){
        hour++
        min=0
    }
    if(hour==24){
        hour=0
    }
    min = min<10? "0"+min:min;
    seconds= seconds<10?"0"+seconds:seconds;
    console.clear()
    console.log(`->${hour}:${min}:${seconds}\n\n`)
    let ampm= hour>=12 ?"pm" : "am";
    let hrs= hour%12;
    console.log(`->${hrs}:${min}:${seconds} ${ampm}`)
}
setInterval(watch,1000)