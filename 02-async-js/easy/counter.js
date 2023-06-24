let counter = 0;

function count(clearId = 0) {
  console.clear();
  console.log(counter);
  counter++;
  clearTimeout(clearId);
  const newId = setTimeout(() => {
    count(newId);
  }, 1000);
}

count();
