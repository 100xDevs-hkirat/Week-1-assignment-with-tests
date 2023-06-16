function clock() {
  const todayDate = new Date();

  const hours = todayDate.getHours();

  const minutes = todayDate.getMinutes();

  const seconds = todayDate.getSeconds();

  const meridiem = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const formattedHours = hours % 12 || 12;

  const formattedTime = `${formattedHours}:${minutes}:${seconds} ${meridiem}`;

  process.stdout.write(`\r${formattedTime}`); // console.log automatticaly adds a new line
  setTimeout(clock, 1000);
}

clock();
