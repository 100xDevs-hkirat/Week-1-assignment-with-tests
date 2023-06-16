const fs= require('fs');

fs.readFile("text.txt" , 'utf-8' , (err , data)=>{
    if(err){
        console.log(err)
        return;

    }
    console.log(data)

})
total = 0 ;

for(let i= 0; i<1000000000000; i++ ){
    total +=i;
}

console.log(total);
