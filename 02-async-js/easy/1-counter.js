let counter = 1;

function increaseCount() {
  console.clear();
  console.log(counter);
  counter += 1;
}

setInterval(increaseCount, 1000);
