let timer = (counter) => {
    setTimeout(() => {
      console.clear();
      console.log(++counter);
      timer(counter);
    },1000);
};

timer(0);
