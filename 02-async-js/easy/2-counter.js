// Function to be executed repeatedly
var count = 0;
function doSomething() {
    console.clear();
    console.log(count);
    count++;
    
    // Call setTimeout to repeat the function after a certain interval
    setTimeout(doSomething, 1000); // 1000 milliseconds = 1 second
  }
  
  // Initial call to start the repetition
  setTimeout(doSomething, 1000); 