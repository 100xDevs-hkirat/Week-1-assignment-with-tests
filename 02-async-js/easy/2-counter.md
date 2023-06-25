## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter1 = 0

function counter(){
  console.clear()
  console.log(counter1++)
  setTimeout(counter, 1000)
}

setTimeout(counter, 1000)






































































(Hint: setTimeout)