// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter() {
  let val = 0;
  const intv = setInterval(() => console.log(val++), 1000);
  const stop = () => clearInterval(intv);
  return { stop };
}

const counterInstance = counter();

//To stop the counter:
//counterInstance.stop();
