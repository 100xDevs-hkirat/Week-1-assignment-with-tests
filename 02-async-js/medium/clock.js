function clock1() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const time = `${hours}:${minutes}:${seconds}`;
  console.log(time); // Output: "HH:MM:SS"
}

function callBoth() {
  clock2();
  clock1();
}

function clock2() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";

  const time = `${hours}:${minutes}:${seconds} ${meridiem}`;
  console.log(time); // Output: "HH:MM:SS AM/PM"
}

setInterval(callBoth, 1000);
