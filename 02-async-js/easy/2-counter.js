let ctr = 1;
function timer() {
  console.clear();
  console.log(ctr++);
  setTimeout(timer(), 1000);
}

setTimeout(timer(), 1000);
