// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function currentTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let ampm;

  if (hour >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  console.log(`${hour}:${minute}:${second}:${ampm}`);
  setTimeout(currentTime, 1000);
}

currentTime();
