setInterval(() => {
  let date = new Date();

  let hours = date.getHours();
  let time = "AM";
  if (hours > 12) {
    hours = hours - 12;
    time = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  console.log(hours + ":" + minutes + ":" + seconds + " " + time);
}, 1000);
