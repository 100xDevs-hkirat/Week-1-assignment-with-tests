const fs = require("fs");

function fileCleaner() {
  fs.readFile("demo.txt", (err, data) => {
    if (err) {
      throw new Error("Can't Read from File !!");
    }
    let fileContent = data.toString();
    let modifiedFileContent = fileContent
      .split(" ")
      .filter((val) => val != "")
      .join(" ");
    fs.writeFile('demo.txt',modifiedFileContent,()=>{
        console.log("File Cleaned And Rewritten");
    });
  });
}

fileCleaner();