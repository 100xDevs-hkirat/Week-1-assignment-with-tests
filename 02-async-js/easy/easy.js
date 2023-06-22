let fs = require("fs");

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let cleanedData = data
    .split(" ")
    .filter((e) => e != "")
    .join(" ");

  fs.writeFile("a.txt", cleanedData, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});

function printTime() {
  setInterval(() => {
    console.clear();
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let type = null;
    if (hh > 12 && hh < 24) {
      hh = hh - 12;
      type = "PM";
    } else if (hh >= 0 && hh < 12) {
      hh = hh;
      type = "AM";
    } else if ((hh = 12)) {
      hh = 12;
      type = "PM";
    }
    console.log(
      `${hh}`.padStart(2, "0") +
        ":" +
        `${mm}`.padStart(2, "0") +
        ":" +
        `${ss}`.padStart(2, "0") +
        " " +
        type
    );
  }, 1000);
}

printTime();
