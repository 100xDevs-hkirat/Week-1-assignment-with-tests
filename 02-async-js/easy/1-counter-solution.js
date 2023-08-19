function counter() {
    var count = 0;
  
    setInterval(() => {
        console.clear();
        console.log(count);
        count++;
    }, 1000)
  }
  
  
  var counter1 = counter();
  
  counter1();
  