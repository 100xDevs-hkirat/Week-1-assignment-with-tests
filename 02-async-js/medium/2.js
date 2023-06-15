let unixTime = Date.now();
let time = new Date(unixTime);
// HH:MM:SS

const time24hr = (time) => {
  let time24hr =
    time.getHours().toString().padStart(2, "0") +
    ":" +
    time.getMinutes().toString().padStart(2, "0") +
    ":" +
    time.getSeconds().toString().padStart(2, "0");
  return time24hr;
};

// HH:MM:SS AM/PM

const time12hr = (time) => {
  let hours = time.getHours();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let time12hr =
    hours.toString().padStart(2, "0") +
    ":" +
    time.getMinutes().toString().padStart(2, "0") +
    ":" +
    time.getSeconds().toString().padStart(2, "0") +
    " " +
    ampm;
  return time12hr;
};

setInterval(() => {
  unixTime = Date.now();
  time = new Date(unixTime);
  console.log(time24hr(time));
  console.log(time12hr(time));
}, 1000);
