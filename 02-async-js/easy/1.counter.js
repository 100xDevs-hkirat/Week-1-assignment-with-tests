let count = 0

const counter = () => {
  console.clear()
  count += 1
  console.log(count)
}

setInterval(counter, 1000)
