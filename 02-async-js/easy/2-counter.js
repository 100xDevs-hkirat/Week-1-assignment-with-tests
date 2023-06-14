function delay(){
    let count = 1;

    function iterate(){
        if(count < 10){
            console.clear();
            console.log(count);
            count++;
            setTimeout(iterate,1000);
        }
    }

    iterate();
}

delay();