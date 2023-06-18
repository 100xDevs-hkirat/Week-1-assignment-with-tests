let countTime =1000;
let time =1;
function printCounterAndUpdate(){
    console.clear();
    console.log(time);
    time = time+1;
    setTimeout(printCounterAndUpdate,countTime);
}

printCounterAndUpdate();