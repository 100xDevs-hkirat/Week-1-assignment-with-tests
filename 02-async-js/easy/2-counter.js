let counterSec=0;
const counter=()=>{
    setTimeout(()=>{
        console.log(counterSec++);
        counter()
    },1000);
}
counter();