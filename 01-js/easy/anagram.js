/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str){
  let array = str.split("");
  array = array.sort();
  let sortedString = array.join("");
  return sortedString;
}


function isAnagram(str1, str2) {
  let str1Lowercase = str1.toLowerCase();
  let str2Lowercase = str2.toLowerCase();
  if (sort(str1Lowercase) == sort(str2Lowercase)){
    return true;
  }
  else{
    return false;
  }
}

let ans = isAnagram("rashen","hsrena");
console.log(ans);

module.exports = isAnagram;
