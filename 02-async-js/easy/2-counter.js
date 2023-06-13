setTimeOutCounter = (count = 0) => {
  setTimeout(() => {
    console.clear();
    console.log(count);
    count++;
    setTimeOutCounter(count);
  }, 1000);
};

setTimeOutCounter();

module.exports = { setTimeOutCounter };
