

function isPalindrome(str) {
  var str1=str.replace(/[\W_]/g, '').toLowerCase();
  var arr=[];
  for(var i =str1.length-1;i>=0;i--){
      arr.push(str1[i]);
  }
  var string1 = arr.join('');
  if(string1==str1)
  return true;
  else 
  return false;
}

module.exports = isPalindrome;
