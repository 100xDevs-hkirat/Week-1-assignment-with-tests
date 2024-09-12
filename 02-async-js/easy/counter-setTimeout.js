
let a=0;
function counter() {
    a=a+1;    
    console.log(a);
    setTimeout(counter,1000);
}

counter(a);