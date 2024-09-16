// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
//
// Can you make it so that it updates every second, and shows time in the following formats -
//
//  - HH:MM::SS (Eg. 13:45:23)
//
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function formatTime(num) {
 return num.toString().padStart(2, '0');
}

function clock() {
 console.clear();
 let currentDate = new Date();
 let hour = formatTime(currentDate.getHours());
 let minutes = formatTime(currentDate.getMinutes());
 let seconds = formatTime(currentDate.getSeconds());
 let time1 = hour + ":" + minutes + ":" + seconds;
 console.log(time1);

 let time2 = "";
 if (+hour > 12) {
  hour = +hour - 12;
  hour = formatTime(hour);
  time2 = hour + ":" + minutes + ":" + seconds + " PM";
 } else {
  time2 = hour + ":" + minutes + ":" + seconds + " AM";
 }
 console.log(time2);
}

setInterval(clock, 1000);
