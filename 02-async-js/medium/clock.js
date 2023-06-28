function updateClock() {
  const d = new Date();

  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var timeFormat24 = hours + ":" + minutes + ":" + seconds;

  var timeFormat12 = hours % 12;
  timeFormat12 = timeFormat12 === 0 ? 12 : timeFormat12;
  timeFormat12 += ":" + minutes + ":" + seconds;
  timeFormat12 += hours >= 12 ? " PM" : " AM";

  // Print time in desired formats
  console.log("HH:MM:SS:", timeFormat24);
  console.log("HH:MM:SS AM/PM:", timeFormat12);
}

// Update clock every second
setInterval(updateClock, 1000);
