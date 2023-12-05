let i = 0;
counter_2();
function counter_2(){
    console.log(++i);
    setTimeout(counter_2,1000);
}

