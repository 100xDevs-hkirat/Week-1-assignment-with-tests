var counter = 0;
function printAndIncreaseCount(){
    console.clear()
    console.log(counter)
    counter = counter + 1;  
}
for(let i = 0; i<100; i++){
setTimeout(printAndIncreaseCount, 1000*i)
}