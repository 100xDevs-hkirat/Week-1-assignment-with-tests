function convertToString(num) {
  let res;
  if (num < 10) {
    res = "0" + num.toString();
  } else {
    res = num.toString();
  }
  return res;
}

function Format(hours, minutes, seconds) {
  hours = convertToString(hours);
  minutes = convertToString(minutes);
  seconds = convertToString(seconds);
  return `${hours}:${minutes}:${seconds}`;
}

const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const currentSecond = currentTime.getSeconds();

let sec = currentSecond;
let minutes = currentMinute;
let hours = currentHour;
setInterval(() => {
  sec += 1;
  console.log(sec);
  if (sec == 60) {
    minutes += 1;
    sec = 0;
  }
  if (minutes == 60) {
    hours += 1;
    minutes = 0;
  }
  if (hours == 24) {
    hours = 0;
  }
  let str = Format(hours, minutes, sec);
  console.log(str);
}, 1000);
