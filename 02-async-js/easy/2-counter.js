
function printer(num) {
    console.clear();
    console.log(num);
    setTimeout(()=>{printer(num+1)},1000);
}

printer(0)