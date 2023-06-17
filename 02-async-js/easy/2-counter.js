let counter = 0

function increment(){
    counter++
    console.clear()
    console.log(counter)
    setTimeout(increment,1000)
}
increment()

