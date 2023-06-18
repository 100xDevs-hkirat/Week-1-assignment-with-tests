let counter = 1;
function stopWatch() {
  console.clear();
  console.log(counter);
  counter++;
  setTimeout(stopWatch, 1000);
}

setTimeout(stopWatch, 1000);
