var counter = 0;
async function foo() {

    //This loop will wait for each next() to pass the next iteration
    for (var i = 0; i < 5; i++) { 
        await new Promise(next=> {
                setTimeout(function(){
                  console.clear()
                  console.log(counter++)
                  next()
                }, 1000)
                
            })      
    }
}

foo().then(() => { console.log("done")})