let n = 1

function stopwatch() {
  if (n > 10) {
    return
  }

  console.log(n)
  n++
}

setInterval(stopwatch, 1000)
