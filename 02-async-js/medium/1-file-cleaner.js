fs = require("fs");

function changeContent(err, content){
    if(err) throw err;
    console.log("-------------------Before Removing Extra Spaces------------------")
    console.log(content)
    // Remove extra spaces from content
    content = content.replace(/\s+/g, " ").trim();
    console.log("-------------------After Removing Extra Spaces------------------")
    console.log(content)
    fs.writeFile('./medium/1-hello.txt', content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}

fs.readFile('./medium/1-hello.txt','utf-8', changeContent);