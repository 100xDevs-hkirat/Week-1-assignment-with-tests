function formatTimeWithLeadingZero(value) {
  return value < 10 ? `0${value}` : value.toString();
}

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${formatTimeWithLeadingZero(
    hours
  )}:${formatTimeWithLeadingZero(minutes)}:${formatTimeWithLeadingZero(
    seconds
  )}`;
  return formattedTime;
}

function getCurrentTimeWithAMPM() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let ampm = "AM";
  let formattedHours = hours;

  if (hours >= 12) {
    ampm = "PM";
    formattedHours = hours === 12 ? 12 : hours - 12;
  }

  const formattedTime = `${formatTimeWithLeadingZero(
    formattedHours
  )}:${formatTimeWithLeadingZero(minutes)}:${formatTimeWithLeadingZero(
    seconds
  )} ${ampm}`;
  return formattedTime;
}

function updateClock() {
  console.log(getCurrentTime());
}

function updateClockWithAMPM() {
  console.log(getCurrentTimeWithAMPM());
}

// Start the clock in HH:MM:SS format
setInterval(updateClock, 1000);

// Start the clock in HH:MM:SS AM/PM format
setInterval(updateClockWithAMPM, 1000);
