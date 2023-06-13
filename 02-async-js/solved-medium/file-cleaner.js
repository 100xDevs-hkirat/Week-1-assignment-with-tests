const { readFile } = require("../solved-easy/read-from-file");
const { writeFile } = require("../solved-easy/write-to-file");

const path = "sks.txt";
const performCleanupByaddingDummyFile = (callback) => {
  const dummyText = "hello     world    my    name   is       sks";
  writeFile(path, dummyText, performCleanup);
};

//lets write the dummy text to text.txt

//lets read the text.txt and clean it
const cleanUpCallback = (error, content) => {
  //using regex beacuse i know it :P
  console.log("content before cleanup \n ", content);
  const cleanUp = content.replace(/\s+/g, " ").trim();
  writeFile(path, cleanUp, (error) => {
    if (error) console.log(error);
    else {
      console.log("New Content after cleanup \n", cleanUp);
    }
  });
};

const performCleanup = () => {
  readFile(path, cleanUpCallback);
};

//if not any dummy file perform this operation to add a dummy file
performCleanupByaddingDummyFile();

// if on custom file then use
// performCleanup()
