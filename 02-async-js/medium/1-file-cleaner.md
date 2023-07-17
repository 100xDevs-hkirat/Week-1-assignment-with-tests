## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


Solution:
//read data, remove whitepaces, write data back

const fs = require('fs');
var data;
const readFile = () => {
  try {
    data = fs.readFileSync("a.txt", 'utf8');
    console.log(`The data in file ${"a.txt"} is: "` + data + '"');
  }
  catch(err)
  {
    console.log(err);
  }
};
readFile();
//we have now read the data, now, we remove whitespaces

var text = data;
// The line below replaces occurrences of two or more consecutive spaces with a single space in the `text` string.
// It uses a regular expression (regex) pattern `/ {2,}/g` for matching the consecutive spaces.
// - The `/` delimiters enclose the regex pattern.
// - The ` ` space character within the pattern matches a single space.
// - The `{2,}` quantifier specifies matching 2 or more occurrences of the preceding space character.
// - The `g` flag enables global replacement across the entire string.
// The replacement string `' '` replaces the matched consecutive spaces with a single space.
text = text.replace(/ {2,}/g, ' ');

console.log(text);

//we now write back the file. no need to keep writeFile async as it anyways is the last function in the program

const writeFile = () => {
  const content = text;
  fs.writeFileSync("a.txt", content);
  console.log(`Data written in ${"a.txt"} successfully`);
}

writeFile();


