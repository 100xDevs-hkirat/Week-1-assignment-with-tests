counter();
function counter(max) {
  var count = 0;
  function increment() {
    count++;
    console.clear();
    console.log(count);
      if (count < max) {
      setTimeout(increment, 1000);
    }
  }
  increment();
}
counter(10);
