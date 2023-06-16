function displaytime(){
    console.clear()
    const time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    console.log("with date library")
    console.log(`${hour}:${minute}:${seconds}`)
}
setInterval(displaytime,1000)

// with the counter 

let hr = 24;
let min = 0;
let sec = 0;

function countDownTime() {
    console.clear();
    sec++
    if(sec===59){
        sec = 0
        min++;
    }
    if(min===59){
        min = 0
        hr++
    }
    if(hr>23){
        hr=0
        min = 0
        sec=0
    }
    console.log("without date library")
    console.log(`${hr}:${min}:${sec}`)
}

setInterval(countDownTime, 1000);