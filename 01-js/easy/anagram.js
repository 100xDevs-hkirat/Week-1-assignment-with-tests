/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1,str2){
  if(sort(str1) == sort(str2)){
      return true;
  }
  else{
      return false;
  }
}

function sort(str){
  let arr = str.split("");
  arr = arr.sort();
  let sortedString = arr.join("");
  return sortedString;
}

let ans = isAnagram("Prath", "athPr");
console.log(ans);

module.exports = isAnagram;
