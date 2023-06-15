function counterFunc() {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const am_pm = hour >= 12 ? "PM" : "AM";
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
  const formatedDate = `${(hour % 12 || 12)
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds} ${am_pm}`;
  console.log(formatedDate);
  setTimeout(counterFunc, 1000);
}
counterFunc();
