/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str){
  var array = str.split("");
  array = array.sort();
  var ans = array.join("");
  return ans;
}

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;
  if(n1 != n2){
    return false;
  } 

  var str1Lower = str1.toLowerCase();
  var str2Lower = str2.toLowerCase();
  if(sort(str1Lower) == sort(str2Lower)){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isAnagram;
