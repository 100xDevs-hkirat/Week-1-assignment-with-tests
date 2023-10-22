// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
var counter=58;
var hour=23;
var minute=59;
setInterval(function () {
    counter += 1;
    console.log(counter.toString().padStart(2, '0')+" AM");
    
}, 1000);