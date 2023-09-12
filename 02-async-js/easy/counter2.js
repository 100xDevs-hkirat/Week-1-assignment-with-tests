let counter = 0

function ctr(){
    console.log(counter)
    counter +=1
    if (counter < 1000){
        setTimeout(ctr,1000)
    }
};

ctr()