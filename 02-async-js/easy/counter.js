// function counter() {
//   let count = 0;
//   function increment() {
//     console.log(count++);
//   }
//   setInterval(increment, 1000);
//   return count;
// }
// counter();

// SOLUTION WITHOUT setInterval

function counter(count) {
  count++;

  console.log(count);
  setTimeout(() => {
    counter(count);
  }, 1000);
}

counter(0);
