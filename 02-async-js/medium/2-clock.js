let date = new Date()
let currsec = date.getSeconds()
let currmin = date.getMinutes()
let currhr = date.getHours()
let sec = currsec;
let hr = currhr;
let min = currmin;
function clock(){
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
            if(hr === 24){
                hr = 0;
                min = 0;
                sec = 0;
            }
        }
    }
    console.clear()
    let totalhr = hr;
    let totalmin = min
    let totalsec = sec
    console.log(totalhr+":"+totalmin+":"+totalsec)
}
setInterval(clock,1000)