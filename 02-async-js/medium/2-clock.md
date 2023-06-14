Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

class Clock{
    constructor(){
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    hours
    minutes
    seconds

    Log(){
        console.log(`${hours}:${minutes}:${seconds});
    }
}

let clock = new Clock();

setInterval(() =>{
    let time = new Date();
    clock.hours = time.getHours();
    clock.minutes = time.getMinutes();
    clock.seconds = time.getMinutes();
    clock.Log();
}, 1000)