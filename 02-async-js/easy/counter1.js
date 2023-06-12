function startCounter() {
  let counter = 0;
  setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);
}

startCounter();
