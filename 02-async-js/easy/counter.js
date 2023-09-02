var counter=1;
function printCounter(){
    console.log(counter);
    counter = counter +1;
}
setInterval(printCounter,1000);
