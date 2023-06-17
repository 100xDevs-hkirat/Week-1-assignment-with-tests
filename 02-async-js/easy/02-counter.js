//Counter without setInterval without using setInterval, try to code a counter in Javascript.

let counter = 1;
function configureCounter() {
  console.log(counter++);
  setTimeout(() => { configureCounter(); }, 1000);
}


configureCounter();