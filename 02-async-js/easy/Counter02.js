
var count  = 0;

function Counter(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(resolve , 1000);
    });

    promise.then(()=>{
        count += 1;
        console.clear();
        console.log(count);
        Counter();
    })
}

Counter();