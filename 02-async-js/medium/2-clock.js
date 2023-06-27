const fs = require("fs");

let second = 0;
let hour = 1;
let minutes = 0;
let ampm = "AM";

function increaseCounter(){
    console.clear();
    if(second>=60){
        minutes++;
        second=0;
    }
    if(minutes>=60){
        hour++;
        minutes=0;
    }
    if(hour>=12 && ampm==="AM"){
        ampm="PM";
        if(hour>12){
            hour=1;
        }
    }
    else{
        ampm="AM";
    }
    console.log(hour,":",minutes,":",second," ",ampm);
    second++;
}

setInterval(increaseCounter,1000);