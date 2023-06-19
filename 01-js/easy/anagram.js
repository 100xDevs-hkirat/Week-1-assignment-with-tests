/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var str1 = str1.toLowerCase();
  var str2 = str2.toLowerCase();
  if (str1.length != str2.length){
    return false
  }
  var array = str2.split("");
  for (let i = 0; i < str1.length; i++){
    if (array.includes(str1[i])){
      let x = array.indexOf(str1[i]);
      array.splice(x,1)
    }
  }
  if (array.length > 0){
    return false
  }
  else{
    return true
  }
}
console.log(isAnagram("vamsi","ismav"));
module.exports = isAnagram;
