/**
 * Code using setInterval
 * Calls the callback function after every 1 second.
 */

// function printNewTime() {
//   console.clear();
//   let hour = new Date().getHours().toString().padStart(2, "0");
//   let minute = new Date().getMinutes().toString().padStart(2, "0");
//   let second = new Date().getSeconds().toString().padStart(2, "0");
//   console.log(`${hour}:${minute}:${second}`);
// }

// function twelveFormatTimeUpdate() {
//   console.clear();
//   let hour = parseInt(new Date().getHours() % 12)
//     .toString()
//     .padStart(2, "0");
//   let minute = parseInt(new Date().getMinutes()).toString().padStart(2, "0");
//   let second = parseInt(new Date().getSeconds()).toString().padStart(2, "0");
//   console.log(`${hour}:${minute}:${second}`);
// }

// // setInterval(printNewTime, 1 * 1000);
// setInterval(twelveFormatTimeUpdate, 1 * 1000);
// console.log("HERE I AM");

function printNewTime() {
  console.clear();
  let hour = new Date().getHours().toString().padStart(2, "0");
  let minute = new Date().getMinutes().toString().padStart(2, "0");
  let second = new Date().getSeconds().toString().padStart(2, "0");
  console.log(`${hour}:${minute}:${second}`);
  setTimeout(printNewTime, 1 * 1000);
}

function twelveFormatTimeUpdate() {
  console.clear();
  let hour = parseInt(new Date().getHours() % 12)
    .toString()
    .padStart(2, "0");
  let minute = parseInt(new Date().getMinutes()).toString().padStart(2, "0");
  let second = parseInt(new Date().getSeconds()).toString().padStart(2, "0");
  console.log(`${hour}:${minute}:${second}`);
  setTimeout(twelveFormatTimeUpdate, 1 * 1000);
}
twelveFormatTimeUpdate();
console.log("HERE I AM");
