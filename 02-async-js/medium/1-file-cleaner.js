const fs = require('fs')

let content = fs.readFileSync("1-file-cleaner.md")
content = content.toString()
content = content.replace(/\s+/g,' ')

fs.writeFile("1-file-cleaner.md",content,(err) => {
	if(err){
		console.log(err)
	}
	console.log("Done")
})
