/**
 * 
 * @param {*} n 
 */
function counter(n) {
    let time = 0;
    let intervalId = setInterval(()=>{
        console.log(`Time is running !! ${time} seconds passed`);
        time++;
        if(time > n) {
            clearInterval(intervalId);
        }
    },1000); 
}

function counterWithoutSetInterval(n) {
    function helper(seconds_passed) {
        console.log(`Time is running !! ${seconds_passed} seconds passed`);
        if(seconds_passed < n) {
            setTimeout(()=>helper(seconds_passed + 1),1000);
        }
    }
    helper(0);
}

// counter(10);
counterWithoutSetInterval(10);