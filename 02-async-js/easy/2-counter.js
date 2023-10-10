let count = 0;
function timer() {
  setTimeout(() => {
    console.clear();
    console.log(count++);
    timer();
  }, 1000);
}
setTimeout(() => {
  console.clear();
  console.log(count++);
  timer();
}, 1000);
