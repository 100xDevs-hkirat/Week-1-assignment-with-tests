// Counter with setInterval

let counter = 0;

setInterval(() => {
  counter++;
  console.log(`${counter} second passed`);
}, 1000);

// Counter without setInterval

let secondCounter = 0;

function countPlus(){
  secondCounter++;
  console.log(`${secondCounter} second passed`);
  setTimeout(countPlus,1000)
}

countPlus();

