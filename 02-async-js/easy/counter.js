let count = 0;
function counter() {
  console.clear;
  console.log(count++ + " sec");
}
setInterval(counter, 1000);
