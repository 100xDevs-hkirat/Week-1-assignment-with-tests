let counter = 0;
console.log(counter);

// This recursive method will print the counter and will call itself after 1 second delay
function recursiveMethod(counter){
    setTimeout(() => {
        console.clear();
        counter++;
        console.log(counter);
        recursiveMethod(counter);
    },1000);
}

recursiveMethod(counter);