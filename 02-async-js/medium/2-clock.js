const time = () => {
  console.clear()
  const time = new Date()
  console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
  console.log(time.toLocaleTimeString())
}

setInterval(time, 1000)
