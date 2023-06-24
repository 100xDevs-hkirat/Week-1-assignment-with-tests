counter = 0;
x = () => {
  console.log(counter);
  setTimeout(x, 1000);
  counter++;
};

x();