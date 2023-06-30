function calculateTime(n) {
  let startTime = new Date().getTime();

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);

  let endTime = new Date().getTime();
  let timeInSeconds = (endTime - startTime) / 1000;
  console.log("The total time taken for calculation " + timeInSeconds);
}
calculateTime(10000000);
