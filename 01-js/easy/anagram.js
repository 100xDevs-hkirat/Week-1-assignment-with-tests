/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let charArray1= str1.split("").map(x=>x.toLowerCase());
  let charArray2= str2.split("").map(x=>x.toLowerCase());
  let a=charArray1.sort().join("")
  let b=charArray2.sort().join("")
  console.log(a,b)
  if(a==b){
    return true
  }
  return false
}


module.exports = isAnagram;
