Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

 function formatTwoDigits(num){
    if(num  < 10){
        return `0${num}`;
    }
    else{
        return num.toString();
    }
}

function formatTime(time){
    const hours = formatTwoDigits(time.getHours());
    const minutes = formatTwoDigits(time.getMinutes());
    const seconds = formatTwoDigits(time.getSeconds());

    return `${hours}:${minutes}:${seconds}`
}


function displayClock(){
    const time = new Date();
    const timeNormal = formatTime(time);
    console.clear();
    console.log(timeNormal);
}

displayClock();

setInterval(displayClock,1000);
