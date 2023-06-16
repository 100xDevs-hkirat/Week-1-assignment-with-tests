function clock() {
  let date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()

  let temp = hour >= 12 ? "PM" : "AM"

  console.log(hour + " : " + min + " : " + sec + " " + temp)
}

clock()
