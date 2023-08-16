/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {

   return new Promise(function(resolve){
        setTimeout(resolve,1000);
    });

}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve,2000);

    });

}

function waitThreeSecond() {

    return new Promise(function(resolve){
        setTimeout(resolve,3000);

    });

}

function calculateTime() {
    var startTime=Date.now()
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(()=>{
        var endTime= Date.now()
        console.log("It took" ,endTime-startTime, "to resolve")
    })

}

calculateTime()