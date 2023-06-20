

function counter(){
    const start = new Date().getTime()
    let prev = 0
    // console.log("0")
    while(true){
        const end = new Date().getTime()
        if(prev != parseInt((end-start)/1000)){
            console.clear()
            prev = parseInt((end-start)/1000)
            console.log(prev)
        }

    }
   
}
let count = 0
function Timeout(){
    setTimeout(()=>{
        count +=1
        console.clear()
        console.log(count)
        Timeout()
    },1000)
}

Timeout()
// counter()