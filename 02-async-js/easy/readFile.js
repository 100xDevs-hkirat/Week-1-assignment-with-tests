const fs = require("fs/promises");

async function readFile(path, encoding = "utf-8") {
  try {
    const data = await fs.readFile(path, { encoding });
    busyTask(5, "AI model execution");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

async function writeFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
  } catch (err) {
    console.log(err);
  }
}

writeFile(
  "/home/naveed/Desktop/100x/Week-1-assignment/02-async-js/easy/blank.txt",
  "My name is Jsdfgdshgdfhdfghdfhdny"
);

function busyTask(timeInSeconds, taskName) {
  console.log(`Starting ${taskName}...`);
  const start = Date.now();
  while (Date.now() - start < timeInSeconds * 1000) {}
  console.log(`Ended ${taskName}`);
}
