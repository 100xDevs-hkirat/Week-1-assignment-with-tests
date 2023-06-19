// function countDownFrom(seconds) {
//   console.log(seconds);

//   if (seconds > 0) {
//     setTimeout(countDownFrom(seconds - 1), 1000);
//   }
// }

// countDownFrom(10);

// function countDownFrom(seconds) {
//   console.log(seconds);

//   if (seconds > 0) {
//     setTimeout(function () {
//       countDownFrom(seconds - 1);
//     }, 1000);
//   }
// }

// countDownFrom(10);

let seconds = 0;
function countDownFrom() {
  console.clear();

  setTimeout(function () {
    console.log(seconds++);
    countDownFrom();
  }, 1000);
}

countDownFrom();
