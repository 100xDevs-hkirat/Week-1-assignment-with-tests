// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const time24HourFormat = (hour, min, sec) => {
  let hourStr = hour % 24;
  hourStr = hour < 10 ? "0" + hour : hour;
  const minStr = min < 10 ? "0" + min : min;
  const secStr = sec < 10 ? "0" + sec : sec;
  return `${hourStr}:${minStr}:${secStr}`;
};

const time12HourFormat = (hour, min, sec) => {
  let hourStr = hour % 24;
  let timezone = hourStr < 12 ? "AM" : "PM";
  hourStr = hourStr < 13 ? hourStr : hourStr - 12;
  hourStr = hourStr < 10 ? "0" + hourStr : hourStr;
  const minStr = min < 10 ? "0" + min : min;
  const secStr = sec < 10 ? "0" + sec : sec;
  return `${hourStr}:${minStr}:${secStr}:${timezone}`;
};

const showTimes = () => {
  const date = new Date();
  let seconds = date.getSeconds();
  let mins = date.getMinutes();
  let hours = date.getHours();
  setInterval(() => {
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      mins += 1;
    }
    if (mins === 60) {
      mins = 0;
      hours += 1;
      s;
    }
    console.log(time24HourFormat(hours, mins, seconds));
    console.log(time12HourFormat(hours, mins, seconds));
  }, 1000);
};

showTimes();
