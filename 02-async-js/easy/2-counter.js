// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(start = 0, n = 40) {
  let val = start ?? 0;
  while (val < n)
    setTimeout(
      (
        (v) => () =>
          console.log(v)
      )(val++),
      val * 1000
    );
}

counter();
