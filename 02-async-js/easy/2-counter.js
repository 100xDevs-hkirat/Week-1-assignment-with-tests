let counter = 0;
const counterFun = () => {
  counter = counter + 1;
  console.log(counter);
  setTimeout(counterFun, 1000);
};

counterFun();