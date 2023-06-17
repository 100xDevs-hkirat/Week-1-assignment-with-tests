// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time ?

const { setInterval } = require("timers");

// Can you make it so that it updates every second, and shows time in the following formats -

// - HH: MM:: SS(Eg. 13: 45: 23)

// - HH: MM::SS AM / PM(Eg 01: 45: 23 PM)
function time(){
const date= new Date();
const currhour= date.getHours();
const currminute= date.getMinutes();
const currseconds= date.getSeconds();
var meridiem="";
if (currhour>=12) {
    meridiem="PM";
}
else{ meridiem="AM";}
console.clear()
console.log(currhour+":"+currminute+":"+currseconds+" "+meridiem)

}
setInterval(time,1000);