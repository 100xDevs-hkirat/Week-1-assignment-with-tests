let i = 1

setTimeout(stopwatch, 1000)

function stopwatch() {
  if (i > 10) {
    return
  }

  console.log(i)
  i++

  setTimeout(stopwatch, 1000)
}
