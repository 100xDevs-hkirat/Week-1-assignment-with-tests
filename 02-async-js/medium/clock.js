function clock() {
  var timeNow = new Date();
  var hours = timeNow.getHours();
  var mins = timeNow.getMinutes();
  var secs = timeNow.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  console.log("HH:MM::SS \n" + hours + ":" + mins + ":" + secs);

  var p = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  console.log("HH:MM::SS AM/PM \n" + hours + ":" + mins + ":" + secs + " " + p);
}

setInterval(clock, 1000);
