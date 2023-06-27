function counterUpdate(x){
    console.log(x)
    if (x>0){
        setTimeout(()=>{counterUpdate(x-1)},1000);
    }
}
counterUpdate(10);