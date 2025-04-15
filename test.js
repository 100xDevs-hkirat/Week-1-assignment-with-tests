function sleep(milliseconds) {
    const start = new Date().getTime(); // Get the current time
  
    console.log(start)
    while (true) {
      const current = new Date().getTime(); // Get the current time in each iteration
      console.log(current)
      if (current - start >= milliseconds) {
        break; // Break the loop when the desired sleep duration has elapsed
      }
    }
}
  
sleep(5000)
console.log("hello world")