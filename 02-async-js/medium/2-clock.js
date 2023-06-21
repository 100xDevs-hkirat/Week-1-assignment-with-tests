// Clock in javascript

let now = new Date();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();
let paddedMinutes, paddedSeconds, paddedHours;

function printTime() {
    console.clear();
    paddedHours = hours.toString().padStart(2,"0");
    paddedMinutes = minutes.toString().padStart(2,"0");
    paddedSeconds = seconds.toString().padStart(2, "0");
    console.log(paddedHours,":",paddedMinutes,":",paddedSeconds);
}

function incrementSeconds(){
    seconds++;
    if(seconds>59) {
        seconds=0;
        incrementMinutes();
    }
    printTime();
}

function incrementMinutes(){
    minutes++;
    if(minutes>59) {
        minutes = 0;
        incrementHours();
    }
    printTime();
}

function incrementHours(){
    hours++;
    if(hours>23) hours = 0;
    printTime();
}


setInterval(incrementSeconds, 1000);
