const fs = require("fs");

// Read file contents
fs.readFile("./dummy.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File contents:");
  console.log(data);

  // Expensive operation
  performExpensiveOperation();
});

// Expensive operation
function performExpensiveOperation() {
  const startTime = Date.now();
  let counter = 1;
  for (let i = 0; i < 1000000000; i++) {
    counter += 1;
  }
  const endTime = Date.now();

  console.log("Expensive operation completed in", endTime - startTime, "ms");
}
