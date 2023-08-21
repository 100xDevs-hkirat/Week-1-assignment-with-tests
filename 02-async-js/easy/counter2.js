let count = 1;

const increment = () => {
  console.log(count + " sec");
  count++;
  counter();
};

const counter = () => {
  setTimeout(increment, 1000);
};
counter();
