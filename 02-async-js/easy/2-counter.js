let count = 0 
const counter = () => {
    console.clear() 
    console.log(count+++" sec") 
    setTimeout(counter, 1000)
}
counter() 


