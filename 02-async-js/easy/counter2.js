function count() {
    let counter = 0;
  
    function increment() {
      counter++;
      console.clear();
      console.log( counter);
        setTimeout(increment, 1000); // Call increment again after 1 second
      
    }
  
    increment();
  }
  
  count();
  