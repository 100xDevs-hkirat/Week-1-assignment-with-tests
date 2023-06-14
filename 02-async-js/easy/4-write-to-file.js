const fs = require('fs')
let count = 0
for(let i=0;i<100000000;i++){
	count += i
}

console.log(count)

fs.writeFile("file.txt","Hello 123", (err) =>{
	if(err){
		console.log(err)
	}
	console.log('Done')
})

for(let i=0;i<100000000;i++){
	count += i
}

console.log(count)
