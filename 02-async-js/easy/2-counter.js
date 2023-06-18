let cnt = 0;
    function counter(){
        console.log(++cnt);
        setTimeout(counter, 1000);
    }

setTimeout(counter, 1000);


// M-2 this will print only till 100

// let cnt = 0;
//     function counter(){
//         console.log(++cnt);
//     }

// for(let i=0;i<100;i++){
//     setTimeout(counter, (i+1)*1000);
// }



    
    






