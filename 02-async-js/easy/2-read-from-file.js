const fs = require('fs');
fs.readFile("text.txt", "utf8", (err, data) => {
    console.log(data);
})

for(let i=0; i<100; i++){
    console.log(i)
}
for(let i=0; i<100; i++){
    console.log(i)
}
for(let i=0; i<100; i++){
    console.log(i)
}
for(let i=0; i<100; i++){
    console.log(i)
}
for(let i=0; i<10000; i++){
    console.log(i)
}