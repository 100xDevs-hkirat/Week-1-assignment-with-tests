function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const timeFormat = hours > 12 ? "PM" : "AM";

  console.log(`${hours}:${minutes}:${seconds}`);
//   console.log(`${hours}:${minutes}:${seconds} ${timeFormat}`);
}

setInterval(updateClock, 1000);
