let counter = 0;

const gameOver = () => {
  console.clear();
  clearInterval(timerId);
  console.log("Game Over");
};

const CounterTime = () => {
  console.clear();
  counter += 1;
  console.log("Timer :", counter);

  if (counter == 5) {
    setTimeout(gameOver, 1000);
  }
};

const timerId = setInterval(CounterTime, 1000);
