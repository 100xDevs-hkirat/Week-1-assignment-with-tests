

function showTime() {
    var now = new Date();
    var hour = new String(now.getHours()).padStart(2, "0");
    var minute = new String(now.getMinutes()).padStart(2, "0");
    var second = new String(now.getSeconds()).padStart(2, "0");
    var ts = [hour, minute, second].join(":");
    console.log(ts);
    var PM = "AM";
    if (hour > 12) {
      hour = new String(parseInt(hour) - 12).padStart(2, "0");
      PM = "PM";
    }
    var ts = [hour, minute, second].join(":");
    console.log(ts + " " + PM);
  }
  
  showTime();
  
  
