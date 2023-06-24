const fs = require("fs/promises");

async function cleanFile(filePath) {
  const originalContent = await fs.readFile(filePath, { encoding: "utf-8" });

  let formattedContent = originalContent;
  while (formattedContent.includes("  ")) {
    formattedContent = formattedContent.replaceAll("  ", " ");
  }

  fs.writeFile(filePath, formattedContent);
}

cleanFile(
  "/home/naveed/Desktop/100x/Week-1-assignment/02-async-js/medium/clean.txt"
);
