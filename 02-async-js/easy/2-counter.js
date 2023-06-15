function counterWithoutSetInterval(count){
    count++;
    setTimeout(()=>{
        console.log(count);
        counterWithoutSetInterval(count);
    },1000);
}


counterWithoutSetInterval(0);