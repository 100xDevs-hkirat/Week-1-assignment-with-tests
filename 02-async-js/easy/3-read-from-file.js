const fs = require("fs");

// Read the contents of the file
fs.readFile("file.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }

  // Print the contents of the file
  console.log("File contents:");
  console.log(data);
});

function performExpensiveOperation() {
  // Simulating an expensive operation
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  console.log("Result of the expensive operation:", sum);
}

// Perform an expensive operation after reading the file
performExpensiveOperation();
