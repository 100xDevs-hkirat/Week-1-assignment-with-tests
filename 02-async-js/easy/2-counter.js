let counter = 0;

function updateCounter() {
  counter++;
  console.log(counter);
  setTimeout(updateCounter, 1000);
}
