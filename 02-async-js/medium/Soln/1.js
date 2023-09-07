const fs = require('fs');

fs.readFile('a.txt','utf8',fileread);

function clean(data){
  var arr = data.split(' ');
  var answerArray = [];
  for(var i =0 ;i<arr.length;i++){
    if(arr[i].length === 0){
      
    } else {
      answerArray.push(arr[i]);
    }
  }
  var answerStr = answerArray.join(' ');
  return answerStr;
}


function fileWritten(err){
  console.log('Done');
}

function fileread(err,data){
  if(err){
    console.log(err);
    return;
  }
  let cleanedData = clean(data);
  fs.writeFile('a.txt',cleanedData,'utf8',fileWritten)
}