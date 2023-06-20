// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

var string1 = "";

function fileReadDone(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File read succesfully");
        console.log("File content: " + data);

        function eliminateSpace(element) {
            if (element != " ");
            return element
        }

        var newData = data.split(" ").filter(eliminateSpace).join(" ");
        console.log("Modified content: " + newData);

        fs.writeFile("file.txt", newData, "utf-8", (err) => {
            if (err)
                console.log(err);
        });

    }
}

fs.readFile("file.txt", "utf-8", fileReadDone);