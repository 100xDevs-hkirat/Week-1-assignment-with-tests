let count = 0

const counter = () => {
  console.clear()
  count = count + 1
  setTimeout(counter, 1000)
  console.log(count)
}

counter()
