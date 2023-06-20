var count = 1;

function counter(){
    console.clear();
    console.log(count)
    count++;
    setTimeout(counter,1000);
}

counter();