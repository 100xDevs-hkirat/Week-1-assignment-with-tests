// const fs = require("fs");

// const readContents = (err, contents) => {
//   console.log(contents, err);
// };

// fs.readFile("./test.txt", "utf8").then(readContents);




setTimeout(function(){ console.log("hello SetTimeout")},1000);
fetch("https://api.publicapis.org/entries").then(function(){
    
    console.log("Fetch Hello");
    
});


sum=0


for (let i=0;i<500000000;i++){
  sum+=1;
};



