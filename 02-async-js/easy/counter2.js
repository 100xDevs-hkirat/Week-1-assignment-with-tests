let counter = 0;
const printCounter = () => {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(printCounter, 1000);
};

printCounter();
