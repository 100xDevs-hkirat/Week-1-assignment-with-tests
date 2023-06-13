const { counterUsingSetInterval } = require("../solved-easy/counter");

const clock = () => {
  const currentTime = new Date();
  console.log(formatClockTrain(currentTime));
  console.log(formatClockInAMPM(currentTime));
};

const formatClockInAMPM = (time) => {
  const hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const hoursInAMPM = String(hours % 12).padStart(2, "0");
  return `${hoursInAMPM}:${minutes}::${seconds} ${ampm}`;
};

const formatClockTrain = (time) => {
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}::${seconds}`;
};

counterUsingSetInterval(0, clock);
