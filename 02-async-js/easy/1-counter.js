//Create a counter in JavaScript.

function configureCounter() {
    var counter = 1;
    setInterval(() => { console.log(counter++); }, 1000);
}
  
  configureCounter();