function updateLog(value) {
    process.stdout.write(`\rCurrent value: ${value}`, 'utf8');
  }
  
  // Example usage:
  let counter = 0;
  const maxValue = 10;
  
  const intervalId = setInterval(() => {
    counter++;
    updateLog(counter);
  
    if (counter >= maxValue) {
      clearInterval(intervalId);
      console.log('\nCounting completed.'); // Add a new line after finishing the update
    }
  }, 1000);
  