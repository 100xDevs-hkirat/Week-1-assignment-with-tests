let counter = 1;

function increaseCount() {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(increaseCount, 1000);
}

setTimeout(increaseCount, 1000);
