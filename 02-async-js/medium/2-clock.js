// Clock in javascript

let now = new Date();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();
let hours12 = hours;
let isAM = true;
let paddedMinutes, paddedSeconds, paddedHours;

function printTime(AMPM=false, isAM=true) {
    paddedHours = hours.toString().padStart(2,"0");
    paddedHours12 = hours12.toString().padStart(2,"0");
    paddedMinutes = minutes.toString().padStart(2,"0");
    paddedSeconds = seconds.toString().padStart(2, "0");
    if(AMPM){
        if(isAM){
            console.log(paddedHours12,":",paddedMinutes,":",paddedSeconds," AM");
        }
        else {
            console.log(paddedHours12,":",paddedMinutes,":",paddedSeconds," PM");
        }
    }
    else {
        console.log(paddedHours,":",paddedMinutes,":",paddedSeconds);
    }
}

function printTime12hrFormat(){
    if(hours==0){
        hours12 = 12;
    }
    if(hours>12){
        hours12 = hours-12;
        isAM = false;
    }
    else{
        isAM = true;
    }
    printTime(AMPM=true, isAM);
}

function incrementSeconds(){
    seconds++;
    if(seconds>59) {
        seconds=0;
        incrementMinutes();
    }
    console.clear();
    printTime();
    printTime12hrFormat();
}

function incrementMinutes(){
    minutes++;
    if(minutes>59) {
        minutes = 0;
        incrementHours();
    }
    printTime();
    printTime12hrFormat();
}

function incrementHours(){
    hours++;
    if(hours>23) hours = 0;
    printTime();
    printTime12hrFormat();
}


setInterval(incrementSeconds, 1000);
