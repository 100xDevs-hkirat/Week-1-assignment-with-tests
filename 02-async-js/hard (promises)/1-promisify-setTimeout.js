/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function task(){
    return new Promise(function (resolve){
            setTimeout(resolve,5000);
    })
}

task().then(function(){
    console.log("Task Completed");
},);