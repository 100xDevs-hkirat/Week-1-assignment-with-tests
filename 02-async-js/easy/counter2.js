let count = 0;

function increment() {
  count++;
  console.clear();
  console.log(count);
}
let timer = setTimeout(function mytimer() {
  increment();
  timer = setTimeout(mytimer, 1000);
}, 1000);

setTimeout(() => {
  console.log('Timer is Dead');
  clearTimeout(timer);
}, 8000);
