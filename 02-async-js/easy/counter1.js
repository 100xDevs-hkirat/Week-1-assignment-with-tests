function counter(n = Infinity) {
    let count = 0;
    const id = setInterval(() => {
        console.log(count);
        if (count >= n) {
            clearInterval(id);
        }
        count++;
    }, 1000)
}
/* This function will take  an input "n". If n is not specified, it will take "Infinity". 
   SetInterval is put inside a function so that count is not global
*/