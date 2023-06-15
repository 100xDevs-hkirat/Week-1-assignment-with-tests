// - HH:MM::SS (Eg. 13:45:23) FORMAT

function timer() {
  let time = new Date();
  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  return console.log(`now time is ${hours}:${min}:${sec}`);
}

setInterval(timer, 1000);

// - HH:MM::SS AM/PM (Eg 01:45:23 PM) FORMAT

function meridianTimer() {
  let time = new Date();
  let hours = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let meridian = "am";

  if (hours > 12) {
    meridian = "pm";
  }
  if (hours > 12) {
    hours -= 12;
  }
  return console.log(`now time is ${hours}:${min}:${sec}:${meridian}`);
}

setInterval(meridianTimer, 1000);
