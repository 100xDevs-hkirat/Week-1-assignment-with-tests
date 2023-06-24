"use strict";

function logCurrentTime() {
  const format = (num) => String(num).padStart(2, "0");
  const dateTime = new Date();
  const hh = dateTime.getHours();
  const mm = format(dateTime.getMinutes());
  const ss = format(dateTime.getSeconds());

  const timePeriod = hh >= 0 && hh < 12 ? "AM" : "PM";

  let HH = hh % 12;
  if (HH === 0) HH = 12;
  HH = format(HH);

  console.log(`${format(hh)}:${mm}:${ss}`);
  console.log(`${HH}:${mm}:${ss} ${timePeriod}`);
  console.log(" ");
}

setInterval(() => {
  console.clear();
  logCurrentTime();
}, 1 * 1000);
