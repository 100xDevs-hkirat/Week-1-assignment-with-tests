
const counter = (n) => {
    let id
    if(!n) n = 0
    clearTimeout(id)
    console.log(n)
    id = setTimeout( () => {
        n += 1
        console.clear()
        counter(n)
    },1000)
}

counter()