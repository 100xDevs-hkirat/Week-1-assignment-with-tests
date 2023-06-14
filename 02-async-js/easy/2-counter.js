const counterWithSetTimeout = (count = 0) => {
  setTimeout(() => {
    console.clear();
    console.log(count);
    count++;
    counterWithSetTimeout(count);
  }, 1000);
};

counterWithSetTimeout();
