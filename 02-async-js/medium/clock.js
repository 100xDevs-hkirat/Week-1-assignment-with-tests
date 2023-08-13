function displayCurrentTime() {
  const padNumber = (number) => {
    return number.toString().padStart(2, "0");
  };
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedTime24 = `${hours}:${minutes}:${seconds}`;
  const formattedTime12 = `${formattedHours}:${padNumber(minutes)}:${padNumber(
    seconds
  )} ${amPm};`;
  //   const formattedTime12 = currentDate.toLocaleTimeString("en-US", {
  //     hour12: true,
  //   });

  console.log(`Current time (24-hour format): ${formattedTime24}`);
  console.log(`Current time (12-hour format): ${formattedTime12}`);
}

setInterval(displayCurrentTime, 1000);
