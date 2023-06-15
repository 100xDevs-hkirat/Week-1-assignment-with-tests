// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

//copied from 1-counter.js & made minor modifications to adjust for time increment

function counter(st, cb, diff = 1) {
  let val = st ?? 0;
  const intv = setInterval(() => {
    val += diff;
    cb?.(val);
  }, 1000);
  const stop = () => clearInterval(intv);
  return { stop };
}

function clock() {
  const a = counter(Date.now(), printIntlDate, 1000);
  setTimeout(() => a.stop(), 5000);
}

function printIntlDate(currDate) {
  const date = new Intl.DateTimeFormat("default", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currDate);

  console.log(date);
}

clock();
