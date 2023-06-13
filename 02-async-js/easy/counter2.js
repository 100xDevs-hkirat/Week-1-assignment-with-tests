function counter() {
  let currentTime = new Date().getTime();

  function increment() {
    let newTime = new Date().getTime();
    let difference = newTime - currentTime;
    console.log(parseInt(difference / 1000));
    setTimeout(increment, 1000);
  }

  increment();
}

counter();
