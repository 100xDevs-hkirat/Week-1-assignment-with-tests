let counter = 0;

async function counterFunction() {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
  console.clear();
  console.log(counter++);
  counterFunction();
}

counterFunction();
