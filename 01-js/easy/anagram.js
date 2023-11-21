/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-angram`
*/

function ConvertToSmall(str){
  let d = "";
  for(let i = 0;i<str.length;i++)
  {
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
      d+= String.fromCharCode(str.charCodeAt(i)+32);
    else
      d+= str[i];
  }
  return d;
}

function isAnagram(str1, str2) {
  str1 = ConvertToSmall(str1);
  str2 = ConvertToSmall(str2);
  if(str1.split("").sort().join("") === str2.split("").sort().join(""))
  return true;
  else
  return false;
}

module.exports = isAnagram;