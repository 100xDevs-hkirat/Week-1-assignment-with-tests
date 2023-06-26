Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

### Solution
```js
// Can be used to test edge cases
let hh = 00;
let mm = 59;
let ss = 55;

// For AM/PM Mode (Can be used for Testing)
let noon = "AM";

function printTime() {
  ++ss;

  if (ss == 60) {
    ++mm;
    ss = 0;

    if (mm == 60) {
      ++hh;
      mm = 0;

      if (hh == 24) {
        hh = 0;
      }
    }
  }

  console.clear();
  hourString = String(hh).padStart(2, '0');
  minuteString = String(mm).padStart(2, '0');
  secondString = String(ss).padStart(2, '0');
  console.log(hourString + ":" + minuteString + ":" + secondString);
  setTimeout(printTime, 1000);
}

function printTimeAMPM() {
  if (hh>12) {
    hh = hh-12;
  } else if (hh == 0) {
    hh = 12;
  }
  ++ss;

  if (ss == 60) {
    ++mm;
    ss = 0;

    if (mm == 60) {
      ++hh;
      mm = 0;
  
      if (hh == 12) {
        if (noon === "AM") {
          noon = "PM";
        } else {
          noon = "AM";
        }
      } else if (hh == 13) {
        hh = 1;
      }
    }
  }
  
  console.clear();
  hourString = String(hh).padStart(2, '0');
  minuteString = String(mm).padStart(2, '0');
  secondString = String(ss).padStart(2, '0');
  console.log(hourString + ":" + minuteString + ":" + secondString, noon);
  setTimeout(printTimeAMPM, 1000);
}

function getSystemTime() {
  let date = new Date();
  hh = date.getHours();
  mm = date.getMinutes();
  ss = date.getSeconds();

  if (hh >= 12) {
    noon = "PM";
  } else {
    noon = "AM";
  }
  
  // printTime(); // For 24 Hours Time Format
  printTimeAMPM(); // For AM/PM Time Format
}

getSystemTime();

// Can be used for Testing
// printTime();
// printTimeAMPM();
```