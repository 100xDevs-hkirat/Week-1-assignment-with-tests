Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


##Solution
function printAndIncrementTime()
{
  var today = new Date();
  var hours = today.getHours();
  var time;
  (hours < 12) ? (time = hours + ":" + today.getMinutes() + ":" + today.getSeconds()) + " AM":  (time = (hours-12)+ ":" + today.getMinutes() + ":" + today.getSeconds() + " PM")
console.log(time);
}
setInterval(printAndIncrementTime, 1000);
