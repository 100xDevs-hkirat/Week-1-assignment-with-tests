let counter = 0;

function fn() {
  console.clear();
  counter += 1;
  console.log(counter);
  setTimeout(fn, 1000);
}

fn();
