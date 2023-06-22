Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();
    console.clear();
    console.log(hours+":"+mins+"::"+secs);
}

setInterval(clock,1000);


// AM and PM

function clock(){
    var currentTime = new Date();
    var m = 'AM'
    var hours = currentTime.getHours();
    if(hours>12){
        hours = hours-12
        m = 'PM'
    }
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();
    console.clear();
    console.log(hours+":"+mins+"::"+secs+" "+m);
}

setInterval(clock,1000);