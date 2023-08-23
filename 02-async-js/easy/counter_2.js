let i=0
let iterations=10
function printFunction() {
    console.log(i)
    i++;
    if (i <= iterations)
    {
        setTimeout( printFunction,1000)
    }
}

printFunction()