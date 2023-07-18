
var counter =1;

function displayCounter(){
    console.clear();
    console.log(counter);
    counter++;
    setTimeout(displayCounter,1000);
}

setTimeout(displayCounter,1000);