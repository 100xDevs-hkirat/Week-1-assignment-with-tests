// 01. File Cleaner

// const fs = require("fs");

// function removeExtraSpaces (fileName) {

//   fs.readFile(fileName, "utf-8", (err, data)=> {
//     if(err){
//       console.log(err)
//     }

//     let correctedData = data.replace(/\s+/g, " ").trim();
//     console.log(data)
//     console.log(correctedData)
//     fs.writeFile(fileName, correctedData, (err)=>{
//       console.log(err)
//     })
//       console.log("file updated sucessfully")
//   })
// }

// let file = "./kali.md";

// removeExtraSpaces(file)

// 02. Clock 

function clock ( hour, minute, second, maridiem ) {

  if( !hour || !minute || !second || !maridiem){
    let msg = "Please Enter Correct Values";
    console.log(msg)
    return msg;
  }

  function hourFn() {
    minute = 0;
    hour = hour + 1;
    if(hour >=12){
      hour = 0;
      if(maridiem == "AM"){
        maridiem = "PM"
      }else {
        maridiem = "AM"
      }
      return;
    }
    return;
    
  }
  function minuteFn() {
    second = 0;
    minute = minute + 1;
    if(minute >= 60){
      hourFn()
    }
    return;
  }

  function secondFn() {
    console.clear()
    console.log(`${hour}:${minute}:${second} ${maridiem}`);
    second = second+1;
    if(second >= 60){
      minuteFn()
    }
  }

  setInterval(secondFn, 1000)

}

// Please set the Time

clock(6,57,25,"PM") // Format clock(hh,mm,ss,AM/PM)