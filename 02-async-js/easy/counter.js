let counter = 0;

//setInterval repeats it self during execution at the set interval

setInterval(() => {
  counter++;
  console.log(counter + " seconds down");
}, 1000);

//  without setInterval
// when setTimeout is invoked inside a function it creates a callback to the same function and creates a recursive loop.
var updateCouter = () => {
  counter++;
  console.log(counter + " seconds down");
  setTimeout(updateCouter, 1000);
};

updateCouter();
