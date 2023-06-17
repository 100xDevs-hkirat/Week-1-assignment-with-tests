function count(n) {
  let counter = 1;
  
  (function insideCount() {
    console.log(counter);
    counter = counter + 1;
    if (counter === n + 1) {
      return;
    }
    setTimeout(insideCount, 1000);
  })();  // Added parentheses to invoke the function immediately
}

count(4);
