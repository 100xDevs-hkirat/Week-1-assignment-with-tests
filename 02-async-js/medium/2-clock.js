// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

var systemDate = new Date();
var hour = systemDate.getHours();
var minutes = systemDate.getMinutes();
var seconds = systemDate.getSeconds();

setInterval(() => {
    seconds++;
    if (seconds >= 60) minutes++;
    if (minutes >= 60) hour++;
    hour %= 24;
    minutes %= 60;
    seconds %= 60;
    console.log(`${hour}:${minutes}:${seconds} ` + (hour >= 12 ? 'PM' : 'AM'));
}, 1000);
